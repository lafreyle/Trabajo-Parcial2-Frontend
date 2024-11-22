import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanissuedService } from '../../../services/loanissued.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoanIssuedI } from '../../../models/loanissued';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-create-loan-issued', // Selector used in the HTML template to represent this component
  standalone: true, // The component is standalone and does not need to be part of a module
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule], // Imported modules for functionality such as forms and UI components
  templateUrl: './create-loan-issued.component.html', // Template for the component's view
  styleUrls: ['./create-loan-issued.component.css'] // Styles for the component
})
export class CreateLoanIssuedComponent implements OnInit {
  public id: number = 0; // Loan ID initialized to 0
  public form: FormGroup; // Reactive form group to hold form data

  // Injecting LoanissuedService to interact with the backend API
  loanissuedService = inject(LoanissuedService);

  // Constructor initializes form with necessary controls and validators
  constructor(
    private formBuilder: FormBuilder, // FormBuilder to help create the form
    private router: Router, // Router to navigate between pages
  ) { 
    this.form = this.formBuilder.group({
      id: [''], // Loan ID
      loan: ['', [Validators.required]], // Loan field with required validator
      employee: ['', [Validators.required]], // Employee field with required validator
      loan_date: ['', [Validators.required]], // Loan date with required validator
    });
  }

  ngOnInit(): void {
    // ngOnInit lifecycle hook, executed when the component is initialized
    // Can be used for further initialization logic
  }

  // Method called when the form is submitted
  onSubmit(): void {
    const formValue: LoanIssuedI = this.form.value; // Get the values from the form
    console.log(formValue); // Log the form data to the console (for debugging)

    // Call the service to create a new loan issued entry
    this.loanissuedService.createLoanIssued(formValue).subscribe(
      () => {
        // Success: The loan was created successfully
        console.log(formValue); // Log the form data again for confirmation

        // Navigate to the 'loanis' page (list of issued loans)
        this.router.navigateByUrl('loanis');
      },
      err => {
        // Error: If there's an error in the API call
        console.log(err); // Log the error to the console
        console.log('The loan could not be created');
      }
    );
  }

  // Method to handle the cancel action, navigates back to the loan issued list page
  cancel() {
    this.router.navigateByUrl('/loanis');
  }

  // Getter methods to access the form controls for each input
  get loan() { return this.form.get('loan'); }
  get employee() { return this.form.get('employee'); }
  get loan_date() { return this.form.get('loan_date'); }
}
