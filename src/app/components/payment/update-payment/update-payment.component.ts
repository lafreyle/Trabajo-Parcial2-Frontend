import { Component, OnInit, inject } from '@angular/core'; // Import necessary Angular modules
import { CommonModule } from '@angular/common'; // CommonModule for common Angular directives
import { ActivatedRoute, Router } from '@angular/router'; // Router and ActivatedRoute for routing and URL parameter access
import { PaymentService } from '../../../services/payment.service'; // Payment service to interact with the API for payment data
import { PaymentI } from '../../../models/payment'; // PaymentI interface to define the payment model
import { CardModule } from 'primeng/card'; // PrimeNG card component for UI display
import { ButtonModule } from 'primeng/button'; // PrimeNG button component
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // For reactive forms

@Component({
  selector: 'app-update-payment', // The component's selector for usage in templates
  standalone: true, // Allows the component to work independently (without needing a module)
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule], // Imports necessary modules for this component
  templateUrl: './update-payment.component.html', // Template URL for the HTML
  styleUrl: './update-payment.component.css' // Style URL for the CSS
})
export class UpdatePaymentComponent implements OnInit {
  public id: number = 0; // To hold the payment ID from the route
  public form: FormGroup; // The form group used for form validation and submission
  
  // Inject the payment service
  paymentService = inject(PaymentService);

  constructor(
    private formBuilder: FormBuilder, // Form builder to easily create form groups
    private router: Router, // Router for navigation
    private route: ActivatedRoute, // ActivatedRoute to access route parameters
  ) { 
    // Initialize the form group with form controls and validators
    this.form = this.formBuilder.group({
      id: [''], // Empty field for the ID
      payment_date: ['', [Validators.required]], // The payment date, required field
      amount: ['', [Validators.required]], // Amount, required field
      status: ['', [Validators.required]], // Status, required field
      loan: ['', [Validators.required]], // Loan number, required field
      client: ['', [Validators.required]], // Client, required field
    });
  }

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    this.id = this.route.snapshot.params['id'];
    // Call the getPayment function to fetch payment data using the ID
    this.getPayment(this.id);
  }

  // Function to fetch payment data by ID
  getPayment(id: number): void {
    this.paymentService.getOnePayment(id)
      .subscribe({
        next: (data) => {
          // Populate the form with the fetched data
          this.form.setValue(data);
        },
        error: (err) => {
          // Handle errors here (optional)
          console.error(err);
        }
      });
  }

  // Function to handle form submission
  onSubmit(): void {
    const formValue: PaymentI = this.form.value; // Get the form data
    const id: number = this.form.value.id; // Extract the ID from the form value

    // Call the service to update the payment
    this.paymentService.updatePayment(id, formValue).subscribe(
      () => {
        // Navigate to the payments list after successful update
        this.router.navigateByUrl('payments');
      },
      err => {
        // Handle the error if update fails
        console.error('Failed to update payment', err);
      }
    );
  }

  // Cancel function to navigate back to the payments list without saving
  cancel(): void {
    this.router.navigateByUrl('/payments');
  }

  // Getters for form controls, making the code cleaner
  get payment_date() { return this.form.get('payment_date'); }
  get amount() { return this.form.get('amount'); }
  get status() { return this.form.get('status'); }
  get loan() { return this.form.get('loan'); }
  get client() { return this.form.get('client'); }
}


