import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // Importing Angular routing services
import { LoantypeService } from '../../../services/loantype.service'; // Service for interacting with loan types
import { LoanTypeI } from '../../../models/loantype'; // Importing the LoanTypeI model
import { CardModule } from 'primeng/card'; // PrimeNG module for card UI component
import { ButtonModule } from 'primeng/button'; // PrimeNG module for button UI component
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; // Angular reactive forms

@Component({
  selector: 'app-update-loan-type', // Component selector
  standalone: true, // Marks the component as standalone, meaning it doesn't require an Angular module
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule], // Required modules for the component
  templateUrl: './update-loan-type.component.html', // Path to the component's HTML template
  styleUrl: './update-loan-type.component.css' // Path to the component's CSS style
})
export class UpdateLoanTypeComponent implements OnInit {
  public id: number = 0; // Variable to hold the loan type ID
  public form: FormGroup; // FormGroup instance for the reactive form

  loantypeService = inject(LoantypeService); // Injecting the LoantypeService into the component
  
  constructor(
    private formBuilder: FormBuilder, // Injecting the FormBuilder service to build the form
    private router: Router, // Injecting the Router service for navigation
    private route: ActivatedRoute, // Injecting the ActivatedRoute service to access route parameters
  ) {
    // Initializing the form with the formBuilder, setting 'id' and 'name' form controls
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]], // 'name' is required
    });
  }

  ngOnInit(): void {
    // Retrieving the 'id' parameter from the route URL using ActivatedRoute
    this.id = this.route.snapshot.params['id'];
    this.getLoanType(this.id); // Fetch the loan type data using the retrieved ID
  }

  // Method to get the loan type data from the service
  getLoanType(id: number): void {
    this.loantypeService.getOneLoanType(id) // Calling the service method to fetch data
      .subscribe({
        next: (data) => {
          this.form.setValue(data); // Populating the form with the fetched data
        }
      });
  }

  // Method to handle form submission
  onSubmit(): void {
    const formValue: LoanTypeI = this.form.value; // Retrieving the form data
    const id: number = this.form.value.id; // Extracting the 'id' from the form data

    // Calling the service method to update the loan type
    this.loantypeService.updateLoanType(id, formValue).subscribe(
      () => {
        // On successful update, navigate to the 'loantype' route
        this.router.navigateByUrl('loantype');
      },
      err => {
        console.log(err); // Log any errors in case the update fails
        console.log('No se ha actualizado correctamente'); // Error message for unsuccessful update
      }
    );
  }

  // Method to handle cancellation and navigate back to the loan types list
  cancel(): void {
    this.router.navigateByUrl('/loantype'); // Navigate back to the 'loantype' page
  }

  // Getter for 'name' form control, for easier access in the template
  get name() { return this.form.get('name'); }

}
