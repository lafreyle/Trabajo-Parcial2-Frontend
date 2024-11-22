import { Component, OnInit, inject } from '@angular/core'; // Import necessary Angular modules
import { CommonModule } from '@angular/common'; // Import CommonModule for basic Angular directives
import { PaymentService } from '../../../services/payment.service'; // Import the PaymentService for backend communication
import { MessageService } from 'primeng/api'; // Import MessageService for notifications
import { Router } from '@angular/router'; // Import Router for navigation
import { PaymentI } from '../../../models/payment'; // Import the PaymentI interface for type safety
import { CardModule } from 'primeng/card'; // Import CardModule for styling
import { ButtonModule } from 'primeng/button'; // Import ButtonModule for styling buttons
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // Import necessary Reactive Forms modules
import { ToastModule } from 'primeng/toast'; // Import ToastModule for notifications (used in MessageService)

@Component({
  selector: 'app-create-payment', // Define the component selector for use in the HTML
  standalone: true, // Indicate that this is a standalone component
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule], // Specify the modules needed for this component
  templateUrl: './create-payment.component.html', // Specify the HTML template for this component
  styleUrl: './create-payment.component.css' // Specify the CSS styles for this component
})
export class CreatePaymentComponent implements OnInit {
  public id: number = 0; // Declare a public id variable initialized to 0
  public form: FormGroup; // Declare a FormGroup variable for managing the form

  paymentService = inject(PaymentService); // Inject the PaymentService for backend API calls

  constructor(
    private formBuilder: FormBuilder, // Inject the FormBuilder service to build the form group
    private router: Router, // Inject the Router service for navigation
  ) { 
    // Initialize the form with the required fields and validation
    this.form = this.formBuilder.group({
      id: [''], // Initialize the 'id' field with an empty string
      payment_date: ['', [Validators.required]], // 'payment_date' field with required validation
      amount: ['', [Validators.required]], // 'amount' field with required validation
      status: ['', [Validators.required]], // 'status' field with required validation
      loan: ['', [Validators.required]], // 'loan' field with required validation
      client: ['', [Validators.required]], // 'client' field with required validation
    });
  }

  ngOnInit(): void {
    // Lifecycle hook called when the component is initialized
    // Currently, no additional logic is implemented in ngOnInit
  }

  onSubmit(): void {
    // This function is triggered when the form is submitted
    const formValue: PaymentI = this.form.value; // Get the form value, typed as PaymentI
    console.log(formValue); // Log the form data to the console for debugging

    // Call the 'createPayment' method of the paymentService to send the data to the backend
    this.paymentService.createPayment(formValue).subscribe(
      () => { // Handle successful response
        // Log success and navigate to the 'payments' page
        console.log(formValue);
        this.router.navigateByUrl('payments'); // Navigate to the 'payments' page after success
      },
      err => { // Handle error response
        console.log(err); // Log the error to the console
        console.log('Failed to create payment'); // Log a failure message
      }
    );
  }

  cancel() {
    // This function is triggered when the "Cancel" button is clicked
    this.router.navigateByUrl('/payments'); // Navigate to the 'payments' page
  }

  // Getter functions to access form controls in the template
  get payment_date() { return this.form.get('payment_date'); }
  get amount() { return this.form.get('amount'); }
  get status() { return this.form.get('status'); }
  get loan() { return this.form.get('loan'); }
  get client() { return this.form.get('client'); }
}
