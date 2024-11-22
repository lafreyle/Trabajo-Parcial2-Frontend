import { Component, OnInit } from '@angular/core';
import { LoanTypeI } from '../../../models/loantype';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importing RouterModule for routing
import { TableModule } from 'primeng/table'; // Importing PrimeNG Table module for displaying data in a table
import { ButtonModule } from 'primeng/button'; // Importing PrimeNG Button module for buttons
import { CardModule } from 'primeng/card'; // Importing PrimeNG Card module for wrapping content in a styled card
import { LoantypeService } from '../../../services/loantype.service'; // Importing the service to interact with the loan type API

@Component({
  selector: 'app-show-loan-type', // Component selector
  standalone: true, // Indicates that this component is standalone and does not need a parent module
  imports: [TableModule, ButtonModule, CardModule, RouterModule], // Importing external modules
  templateUrl: './show-loan-type.component.html', // Template URL for the component
  styleUrl: './show-loan-type.component.css' // CSS file for component styling
})
export class ShowLoanTypeComponent implements OnInit { 
  public loantype: LoanTypeI[] = []; // Array to store loan type data fetched from the service

  constructor(
    private loantypeService: LoantypeService, // Injecting the loan type service to interact with the API
    private router: Router // Injecting Angular's Router for navigation
  ) { }

  ngOnInit(): void {
    // When the component initializes, fetch all loan types
    this.showLoanType();
  }

  showLoanType() {
    // Calling the service method to fetch loan types from the API
    this.loantypeService.getAllLoanType()
      .subscribe({
        next: (data) => {
          // If the API call is successful, assign the result to the 'loantype' array
          this.loantype = data;
          // Optionally log the result for debugging (currently commented out)
          // console.log(this.loantype)
        }
      });
  }

  delete(id: number): void {
    // Navigate to the loan type list page before performing the delete action
    this.router.navigateByUrl('/loantype');
    
    // Calling the service method to delete the loan type by ID
    this.loantypeService.deleteLoanType(id).subscribe(
      () => {
        // If the deletion is successful, refresh the loan type list
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted loan', life:5000}); // Optionally show a message notification (commented out)
        this.showLoanType(); // Refresh the loan type list after deletion
      },
      err => {
        // If there is an error during deletion, log the error and navigate back to the loan type list
        console.log('error');
        this.router.navigateByUrl('/loantype'); // Redirect to the loan type list in case of error
      }
    );
  }
}
