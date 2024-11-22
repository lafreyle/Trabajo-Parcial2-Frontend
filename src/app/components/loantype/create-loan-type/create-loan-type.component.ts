import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoantypeService } from '../../../services/loantype.service'; // Service for managing loan types
import { MessageService } from 'primeng/api'; // Used for showing messages
import { Router } from '@angular/router'; // For navigation after form submission
import { LoanTypeI } from '../../../models/loantype'; // Interface for the loan type data model
import { CardModule } from 'primeng/card'; // PrimeNG Card component
import { ButtonModule } from 'primeng/button'; // PrimeNG Button component
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; // For reactive forms
import { ToastModule } from 'primeng/toast'; // PrimeNG Toast component for notifications

@Component({
  selector: 'app-create-loan-type', // Defines the component selector
  standalone: true, // Marks the component as standalone (no need for external module imports)
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule], // Importing required modules
  templateUrl: './create-loan-type.component.html', // HTML template file
  styleUrls: ['./create-loan-type.component.css'] // CSS style file
})
export class CreateLoanTypeComponent implements OnInit {
  public id: number = 0; // Variable for loan type ID
  public form: FormGroup; // Form group to manage form controls

  // Injecting the LoanTypeService to interact with the backend
  loantypeService = inject(LoantypeService);

  constructor(
    private formBuilder: FormBuilder, // Injecting form builder for creating the form
    private router: Router, // Injecting router for navigation
  ) { 
    // Defining the form controls and validation rules
    this.form = this.formBuilder.group({
      id: [''], // Optional field for ID (can be used for update scenarios)
      name: ['', [Validators.required]], // Loan type name is required
    });
  }

  ngOnInit(): void {
    // This is where you can initialize any additional logic (currently empty)
  }

  // This method handles form submission
  onSubmit(): void {
    const formValue: LoanTypeI = this.form.value; // Get form values
    console.log(formValue); // Logging form values for debugging
    this.loantypeService.createLoanType(formValue).subscribe( // Calling the service to create the loan type
      () => {
        // On success, log the form value and navigate to 'loantype' page
        console.log(formValue);
        this.router.navigateByUrl('loantype'); // Redirect to loan type list page
      },
      err => {
        // On error, log the error message
        console.log(err);
        console.log('Error: Unable to create loan type');
      }
    );
  }

  // This method handles the cancel action (navigation)
  cancel() {
    this.router.navigateByUrl('/loantype'); // Redirect to the loan type list page
  }

  // Getter for 'name' form control
  get name() { return this.form.get('name'); }
}
