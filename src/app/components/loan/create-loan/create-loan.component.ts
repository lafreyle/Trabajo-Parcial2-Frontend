import { Component, OnInit, inject } from '@angular/core'; // Import necessary Angular core modules
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { LoanService } from '../../../services/loan.service'; // Import LoanService to handle loan-related operations
import { MessageService } from 'primeng/api'; // Import MessageService for displaying messages
import { Router } from '@angular/router'; // Import Router for navigation
import { LoanI } from '../../../models/loan'; // Import LoanI interface for loan data structure
import { CardModule } from 'primeng/card'; // Import CardModule for card UI component
import { ButtonModule } from 'primeng/button'; // Import ButtonModule for button UI component
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // Import Reactive Forms modules for form handling
import { ToastModule } from 'primeng/toast'; // Import ToastModule for toast notifications

@Component({
  selector: 'app-create-loan', // Define the selector for this component
  standalone: true, // Indicate that this component is standalone
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule], // Specify the modules to import
  templateUrl: './create-loan.component.html', // Specify the HTML template for this component
  styleUrls: ['./create-loan.component.css'] // Specify the CSS styles for this component
})
export class CreateLoanComponent implements OnInit {
  public id: number = 0; // Initialize loan ID
  public form: FormGroup; // Declare a FormGroup for the loan form

  loanService = inject(LoanService); // Inject LoanService for use in this component

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder for creating reactive forms
    private router: Router, // Inject Router for navigation
  ) { 
    // Initialize the form with validation rules
    this.form = this.formBuilder.group({
      id: [''], // Form control for loan ID
      amount: ['', [Validators.required]], // Form control for loan amount, required
      interest_rate: ['', [Validators.required]], // Form control for interest rate, required
      disbursement_date: ['', [Validators.required]], // Form control for disbursement date, required
      due_date: ['', [Validators.required]], // Form control for due date, required
      employee: ['', [Validators.required]], // Form control for employee, required
      status: ['', [Validators.required]], // Form control for loan status, required
      loan_type: ['', [Validators.required]], // Form control for loan type, required
      client: ['', [Validators.required]], // Form control for client, required
    });
  }

  ngOnInit(): void {
    // Lifecycle hook that is called after the component is initialized
  }

  onSubmit(): void {
    const formValue: LoanI = this.form.value; // Get the form values as LoanI type
    console.log(formValue); // Log the form values to the console
    this.loanService.createLoan(formValue).subscribe(
      () => {
        // On successful loan creation
        // console.log('Loan created successfully'); // Uncomment to log success message

        // Display success message (commented out)
        // setTimeout(() => {                  
        //   this.messageService.add({ severity: 'success', summary: 'Notification', detail: 'Create Loan', life: 5000 });
        // }, 0);
        
        console.log(formValue); // Log the form values again
        this.router.navigateByUrl('loans'); // Navigate to the loans page
      },
      err => {
        // On error during loan creation
        console.log(err); // Log the error to the console
        console.log('Loan creation failed'); // Log failure message
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/loans'); // Navigate to the loans page on cancel
  }

  // Getters for form controls to simplify access
  get amount() { return this.form.get('amount'); }
  get interest_rate() { return this.form.get('interest_rate'); }
  get disbursement_date() { return this.form.get('disbursement_date'); }
  get due_date() { return this.form.get('due_date'); }
  get employee() { return this.form.get('employee'); }
  get status() { return this.form.get('status'); }
  get loan_type() { return this.form.get('loan_type'); }
  get client() { return this.form.get('client'); }
}


