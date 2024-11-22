import { Component, OnInit, inject } from '@angular/core'; // Import necessary Angular core modules
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives

import { ActivatedRoute, Router } from '@angular/router'; // Import Router and ActivatedRoute for navigation and route parameters
import { ClientService } from '../../../services/client.service'; // Import the service for client-related API calls
import { ClientI } from '../../../models/client'; // Import the Client interface for type safety
import { CardModule } from 'primeng/card'; // Import PrimeNG Card module for UI cards
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module for UI buttons
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // Import Reactive Forms modules

@Component({
  selector: 'app-update-client', // Selector for the component
  standalone: true, // Indicates that this component is standalone
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule], // Import necessary modules for this component
  templateUrl: './update-client.component.html', // Path to the component's HTML template
  styleUrls: ['./update-client.component.css'] // Path to the component's CSS styles (corrected from styleUrl to styleUrls)
})
export class UpdateClientComponent implements OnInit {
  public id: number = 0; // Variable to hold the client ID
  public form: FormGroup; // Reactive form group for client data

  clientService = inject(ClientService); // Inject ClientService using Angular's inject function

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder for creating reactive forms
    private router: Router, // Inject Router for navigation
    private route: ActivatedRoute, // Inject ActivatedRoute to access route parameters
  ) { 
    // Initialize the form with controls and validators
    this.form = this.formBuilder.group({
      id: [''], // Control for client ID
      first_name: ['', [Validators.required]], // Control for first name with required validator
      last_name: ['', [Validators.required]], // Control for last name with required validator
      address: ['', [Validators.required]], // Control for address with required validator
      phone: ['', [Validators.required]], // Control for phone with required validator
      email: ['', [Validators.required]], // Control for email with required validator
    });
  }

  ngOnInit(): void {
    // Lifecycle hook that is called after the component is initialized
    this.id = this.route.snapshot.params['id']; // Get the client ID from the route parameters
    this.getClient(this.id); // Fetch the client data using the ID
  }

  getClient(id: number) {
    // Method to fetch a single client by ID
    this.clientService.getOneClient(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data); // Set the form values with the fetched client data
          // console.log(data.cliente); // Uncomment to log the client data for debugging
        }
      });
  }

  onSubmit(): void {
    // Method to handle form submission
    const formValue: ClientI = this.form.value; // Get the form values
    const id: number = this.form.value.id; // Get the client ID from the form
    this.clientService.updateClient(id, formValue).subscribe(
      () => {
        // On successful update, navigate back to the clients list
        // console.log('Se ha creado correctamente'); // Uncomment to log success message
        // Uncomment the following lines to show a success notification
        // setTimeout(() => {                  
        //   this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});
        // }, 0);
        this.router.navigateByUrl('clients'); // Navigate to the clients list page
      },
      err => {
        // Handle error during update
        console.log(err); // Log the error for debugging
        console.log('No se ha creado correctamente'); // Log failure message
      }
    );
  }

  cancel() {
    // Method to handle cancel action
    this.router.navigateByUrl('/clients'); // Navigate back to the clients list page
  }

  // Getters for form controls to simplify access in the template
  get first_name() { return this.form.get('first_name'); }
  get last_name() { return this.form.get('last_name'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get email() { return this.form.get('email'); }
}