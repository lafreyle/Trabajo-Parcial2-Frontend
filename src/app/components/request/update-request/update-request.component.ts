import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // Importing Router and ActivatedRoute for navigation and retrieving parameters
import { RequestService } from '../../../services/request.service'; // Service to handle request-related operations
import { LoanApplicationI } from '../../../models/request'; // Model interface for loan application
import { CardModule } from 'primeng/card'; // Importing PrimeNG Card module for card styling
import { ButtonModule } from 'primeng/button'; // Importing PrimeNG Button module for buttons
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // For reactive forms and form validation

@Component({
  selector: 'app-update-request', // Component selector to use in HTML
  standalone: true, // This is a standalone component, meaning it can be used independently without a parent module
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule], // Required modules for this component
  templateUrl: './update-request.component.html', // Path to the HTML template
  styleUrl: './update-request.component.css' // Path to the component's styles
})
export class UpdateRequestComponent implements OnInit{
  public id: number = 0; // To store the ID of the request
  public form: FormGroup; // Reactive form to hold the form data

  // Injecting the RequestService to interact with the backend API
  requestService = inject(RequestService);

  constructor(
    private formBuilder: FormBuilder, // To create form groups and form controls
    private router: Router, // To handle routing
    private route: ActivatedRoute, // To access route parameters (ID in this case)
  ) { 
    // Initialize the form group with controls and validators
    this.form = this.formBuilder.group({
      id: [''], // The request ID
      application_date: ['', [Validators.required]], // Application date (required field)
      status: ['', [Validators.required]], // Status (required field)
      client: ['', [Validators.required]], // Client (required field)
      employee: ['', [Validators.required]], // Employee (required field)
      loan_type: ['', [Validators.required]], // Loan type (required field)
    });
  }

  ngOnInit(): void {
    // Retrieving the 'id' parameter from the route
    this.id = this.route.snapshot.params['id'];
    this.getRequest(this.id); // Fetch the request details by ID
  }

  // Method to fetch request data based on ID
  getRequest(id: number) {
    this.requestService.getOneRequest(id) // Service method to get request data
    .subscribe({
      next: (data) => {
        // Setting the form's values with the fetched request data
        this.form.setValue(data); // Populating the form with the retrieved data
      }
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    const formValue: LoanApplicationI = this.form.value; // Get the form values
    const id: number = this.form.value.id; // Extract the ID from form values
    
    // Call the service method to update the request
    this.requestService.updateRequest(id, formValue).subscribe(
      () => {
        // Navigate to the 'requests' page after successful update
        this.router.navigateByUrl('requests');
      },
      err => {
        console.log(err); // Log error in case of failure
        console.log('Failed to update request');
      }
    );
  }

  // Method to handle cancel button click (navigate to requests list)
  cancel() {
    this.router.navigateByUrl('/requests'); // Navigate back to the requests list
  }

  // Getter methods to access form controls for validation or display purposes
  get application_date() { return this.form.get('application_date'); }
  get status() { return this.form.get('status'); }
  get client() { return this.form.get('client'); }
  get employee() { return this.form.get('employee'); }
  get loan_type() { return this.form.get('loan_type'); }
}
