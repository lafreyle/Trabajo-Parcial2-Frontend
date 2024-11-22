import { Component, OnInit, inject } from '@angular/core'; // Importing the necessary Angular modules
import { CommonModule } from '@angular/common'; // Importing CommonModule to use common directives

import { ActivatedRoute, Router } from '@angular/router'; // Importing Router and ActivatedRoute for navigation and route parameters
import { LoanissuedService } from '../../../services/loanissued.service'; // Importing the service to interact with the loanissued data
import { LoanIssuedI } from '../../../models/loanissued'; // Importing the LoanIssued model interface
import { CardModule } from 'primeng/card'; // Importing PrimeNG CardModule for UI card component
import { ButtonModule } from 'primeng/button'; // Importing PrimeNG ButtonModule for UI button component
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // Importing reactive form modules

@Component({
  selector: 'app-update-loan-issued', // Component selector to identify the component in HTML
  standalone: true, // Marks the component as standalone
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule], // Declaring the imported modules for this component
  templateUrl: './update-loan-issued.component.html', // Template URL for the component's HTML
  styleUrl: './update-loan-issued.component.css' // Styling for the component
})
export class UpdateLoanIssuedComponent implements OnInit {
  public id: number = 0; // Declaring a public variable to store the loan's ID
  public form: FormGroup; // Declaring a variable to store the form group

  loanissuedService = inject(LoanissuedService); // Injecting the LoanissuedService to interact with backend data

  constructor(
    private formBuilder: FormBuilder, // Injecting FormBuilder for building the form
    private router: Router, // Injecting Router to navigate between views
    private route: ActivatedRoute, // Injecting ActivatedRoute to access route parameters
  ) { 
    // Initializing the form with form controls and validation rules
    this.form = this.formBuilder.group({
      id: [''], // Form control for the ID (empty initially)
      loan: ['', [Validators.required]], // Form control for loan, requires input
      employee: ['', [Validators.required]], // Form control for employee, requires input
      loan_date: ['', [Validators.required]], // Form control for loan date, requires input
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Getting the 'id' from the route parameter to know which loan to update
    this.getLoanIssued(this.id); // Calling the method to get the loan data by the id
  }

  // Method to get loan issued data based on the ID
  getLoanIssued(id: number) {
    this.loanissuedService.getOneLoanIssued(id) // Using the service to fetch the loan data
    .subscribe({
      next: (data) => {
        this.form.setValue(data); // Setting the fetched data into the form
      }
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    const formValue: LoanIssuedI = this.form.value; // Getting the form values
    const id: number = this.form.value.id; // Getting the form ID value
    this.loanissuedService.updateLoanIssued(id, formValue).subscribe( // Calling the service to update the loan
      () => {
        // If the update is successful, navigate to the loan list page
        this.router.navigateByUrl('loanis');
      },
      err => {
        // If there is an error, log it and optionally show a message
        console.log(err); 
        console.log('Loan update failed');
      }
    );
  }

  // Method to handle cancel action, which redirects to the loan list page
  cancel() {
    this.router.navigateByUrl('/loanis'); // Navigating back to the loan list
  }

  // Getter methods to access the form controls easily
  get loan() { return this.form.get('loan'); } // Accessing the loan form control
  get employee() { return this.form.get('employee'); } // Accessing the employee form control
  get loan_date() { return this.form.get('loan_date'); } // Accessing the loan_date form control
}
