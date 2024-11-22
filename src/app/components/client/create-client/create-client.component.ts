import { Component, OnInit, inject } from '@angular/core'; // Import necessary Angular core modules
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { ClientService } from '../../../services/client.service'; // Import the service for client-related API calls
import { MessageService } from 'primeng/api'; // Import MessageService for displaying messages (uncomment if used)
import { Router } from '@angular/router'; // Import Router for navigation
import { ClientI } from '../../../models/client'; // Import the Client interface for type safety
import { CardModule } from 'primeng/card'; // Import PrimeNG Card module for UI
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module for UI
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import Reactive Forms modules
import { ToastModule } from 'primeng/toast'; // Import PrimeNG Toast module for notifications

@Component({
  selector: 'app-create-client', // Selector for the component
  standalone: true, // Indicates that this component is standalone
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule], // Import necessary modules for this component
  templateUrl: './create-client.component.html', // Path to the component's HTML template
  styleUrls: ['./create-client.component.css'] // Path to the component's CSS styles
})
export class CreateClientComponent implements OnInit {
  public id: number = 0; // Initialize id, though it seems unused in the form
  public form: FormGroup; // Declare a FormGroup to manage the form controls

  // Inject the ClientService for making API calls
  clientService = inject(ClientService);

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder for creating reactive forms
    private router: Router, // Inject Router for navigation
  ) { 
    // Initialize the form with validation rules
    this.form = this.formBuilder.group({
      id: [''], // Optional field for id, can be removed if not used
      first_name: ['', [Validators.required]], // First name is required
      last_name: ['', [Validators.required]], // Last name is required
      address: ['', [Validators.required]], // Address is required
      phone: ['', [Validators.required]], // Phone number is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be a valid email format
    });
  }

  ngOnInit(): void {
    // Any initialization logic can go here (currently empty)
  }

  onSubmit(): void {
    // This method is called when the form is submitted
    const formValue: ClientI = this.form.value; // Get the current form values
    console.log(formValue); // Log form values for debugging
    this.clientService.createClient(formValue).subscribe(
      () => {
        // Handle successful creation of the client
        console.log('Client created successfully'); // Log success message
        this.router.navigateByUrl('clients'); // Navigate to the clients list page
      },
      err => {
        // Handle error during client creation
        console.error(err); // Log the error for debugging
        console.log('Failed to create client'); // Log failure message
      }
    );
  }

  cancel() {
    // This method is called when the cancel action is triggered
    this.router.navigateByUrl('/clients'); // Navigate back to the clients list page
  }

  // Getters for accessing form controls
  get first_name() { return this.form.get('first_name'); } // Getter for first name control
  get last_name() { return this.form.get('last_name'); } // Getter for last name control
  get address() { return this.form.get('address'); } // Getter for address control
  get phone() { return this.form.get('phone'); } // Getter for phone control
  get email() { return this.form.get('email'); } // Getter for email control
}