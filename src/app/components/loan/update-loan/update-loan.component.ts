import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../../../services/loan.service';
import { LoanI } from '../../../models/loan';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-loan', // Component selector used in HTML
  standalone: true, // Standalone component without needing module imports
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule], // Import necessary modules
  templateUrl: './update-loan.component.html', // HTML template for the component
  styleUrls: ['./update-loan.component.css'] // CSS for the component
})
export class UpdateLoanComponent implements OnInit {
  public id: number = 0; // Variable to hold the loan ID, initialized to 0
  public form: FormGroup; // Reactive form group for loan form data
  public isLoading = false; // Variable to track loading state during form submission

  loanService = inject(LoanService); // Inject the LoanService to handle API calls

  constructor(
    private formBuilder: FormBuilder, // FormBuilder to initialize the reactive form
    private router: Router, // Router to navigate between pages
    private route: ActivatedRoute // ActivatedRoute to access route parameters
  ) {
    // Initialize the reactive form with form controls and validations
    this.form = this.formBuilder.group({
      id: [''], // Loan ID
      amount: ['', [Validators.required]], // Loan amount, required field
      interest_rate: ['', [Validators.required]], // Loan interest rate, required field
      disbursement_date: ['', [Validators.required]], // Disbursement date, required field
      due_date: ['', [Validators.required]], // Due date, required field
      employee: ['', [Validators.required]], // Employee handling the loan, required field
      status: ['', [Validators.required]], // Loan status, required field
      loan_type: ['', [Validators.required]], // Type of loan, required field
      client: ['', [Validators.required]], // Client receiving the loan, required field
    });
  }

  ngOnInit(): void {
    // Retrieve the loan ID from the route parameters when the component initializes
    this.id = this.route.snapshot.params['id'];
    // Call the method to get the loan data based on the retrieved ID
    this.getLoan(this.id);
  }

  // Method to fetch the loan details based on the loan ID
  getLoan(id: number): void {
    // Call the LoanService to fetch the loan data by ID
    this.loanService.getOneLoan(id).subscribe({
      next: (data) => this.form.patchValue(data), // Populate the form with the fetched data
      error: (err) => console.error('Error while fetching loan data:', err), // Handle error if data fetching fails
    });
  }

  // Method to handle form submission and update the loan
  onSubmit(): void {
    // Check if the form is valid before proceeding
    if (this.form.invalid) {
      console.log('Form is invalid');
      return; // Prevent submission if the form is invalid
    }

    // Set loading state to true while the request is being processed
    this.isLoading = true;
    const formValue: LoanI = this.form.value; // Get the form values
    const id: number = this.form.value.id; // Get the loan ID from the form

    // Call the LoanService to update the loan with the provided data
    this.loanService.updateLoan(id, formValue).subscribe({
      next: () => {
        this.isLoading = false; // Set loading state to false once the update is complete
        this.router.navigateByUrl('loans'); // Navigate to the loans list page
      },
      error: (err) => {
        this.isLoading = false; // Set loading state to false in case of error
        console.error('Error while updating loan:', err); // Log the error if the update fails
      },
    });
  }

  // Method to handle the cancellation of the update and navigate back to the loans list
  cancel(): void {
    this.router.navigateByUrl('/loans'); // Navigate to the loans list page
  }

  // Getter methods to access form controls for validation or UI purposes
  get amount() { return this.form.get('amount'); }
  get interest_rate() { return this.form.get('interest_rate'); }
  get disbursement_date() { return this.form.get('disbursement_date'); }
  get due_date() { return this.form.get('due_date'); }
  get employee() { return this.form.get('employee'); }
  get status() { return this.form.get('status'); }
  get loan_type() { return this.form.get('loan_type'); }
  get client() { return this.form.get('client'); }
}

