import { Component, OnInit, inject } from '@angular/core'; // Import necessary Angular core modules
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { EmployeeService } from '../../../services/employee.service'; // Import the service for employee-related API calls
import { MessageService } from 'primeng/api'; // Import PrimeNG MessageService for notifications
import { Router } from '@angular/router'; // Import Router for navigation
import { EmployeeI } from '../../../models/employee'; // Import the Employee interface for type safety
import { CardModule } from 'primeng/card'; // Import PrimeNG Card module for UI cards
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module for UI buttons
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import Reactive Forms modules
import { ToastModule } from 'primeng/toast'; // Import PrimeNG Toast module for notifications

@Component({
  selector: 'app-create-employee', // Selector for the component
  standalone: true, // Indicates that this component is standalone
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule], // Import necessary modules for this component
  templateUrl: './create-employee.component.html', // Path to the component's HTML template
  styleUrls: ['./create-employee.component.css'] // Path to the component's CSS styles (corrected from styleUrl to styleUrls)
})
export class CreateEmployeeComponent implements OnInit {
  public id: number = 0; // Variable to hold the employee ID (not used in this context)
  public form: FormGroup; // Reactive form group for employee data

  employeeService = inject(EmployeeService); // Inject EmployeeService using Angular's inject function

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder for creating reactive forms
    private router: Router, // Inject Router for navigation
  ) { 
    // Initialize the form with controls and validators
    this.form = this.formBuilder.group({
      id: [''], // Control for employee ID (not used in creation)
      first_name: ['', [Validators.required]], // Control for first name with required validator
      last_name: ['', [Validators.required]], // Control for last name with required validator
      position: ['', [Validators.required]], // Control for position with required validator
    });
  }

  ngOnInit(): void {
    // Lifecycle hook that is called after the component is initialized
  }

  onSubmit(): void {
    // Method to handle form submission
    const formValue: EmployeeI = this.form.value; // Get the form values
    console.log(formValue); // Log the form values for debugging
    this.employeeService.createEmployee(formValue).subscribe(
      () => {
        // On successful creation, navigate back to the employees list
        // console.log('Se ha creado correctamente'); // Uncomment to log success message

        // Uncomment the following lines to show a success notification
        // setTimeout(() => {                  
        //   this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Empleado Creado', life:5000});
        // }, 0);
        
        console.log(formValue); // Log the form values again for debugging
        this.router.navigateByUrl('employees'); // Navigate to the employees list page
      },
      err => {
        // Handle error during creation
        console.log(err); // Log the error for debugging
        console.log('No se ha creado correctamente'); // Log failure message
      }
    );
  }

  cancel() {
    // Method to handle cancel action
    this.router.navigateByUrl('/employees'); // Navigate back to the employees list page
  }

  // Getters for form controls to simplify access in the template
  get first_name() { return this.form.get('first_name'); }
  get last_name() { return this.form.get('last_name'); }
  get position() { return this.form.get('position'); }
}