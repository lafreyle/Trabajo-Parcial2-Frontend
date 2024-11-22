import { Component, OnInit } from '@angular/core';
import { LoanIssuedI } from '../../../models/loanissued'; // Importing the LoanIssuedI interface to type the loanissued array
import { Router } from '@angular/router'; // Importing Router to navigate to different views
import { RouterModule } from '@angular/router'; // Importing RouterModule for routing
import { TableModule } from 'primeng/table'; // Importing the TableModule from PrimeNG for table UI components
import { ButtonModule } from 'primeng/button'; // Importing ButtonModule from PrimeNG for button UI components
import { CardModule } from 'primeng/card'; // Importing CardModule from PrimeNG for card UI components
import { LoanissuedService } from '../../../services/loanissued.service'; // Importing the service for loan issued data operations

@Component({
  selector: 'app-show-loan-issued',
  standalone: true, // Indicates that this component is standalone and doesn't rely on other modules
  imports: [TableModule, ButtonModule, CardModule, RouterModule], // Declaring the modules this component needs
  templateUrl: './show-loan-issued.component.html', // Path to the component's HTML template
  styleUrl: './show-loan-issued.component.css' // Path to the component's CSS for styling
})
export class ShowLoanIssuedComponent implements OnInit {
  public loanissued: LoanIssuedI[] = []; // Declare an array to store loan issued data, typed with LoanIssuedI interface

  constructor(
    private loanissuedService: LoanissuedService, // Injecting the loanissuedService for API calls
    private router: Router // Injecting the Router to navigate between pages
  ) { }

  ngOnInit(): void {
    this.showLoanIssued(); // Calling the method to fetch loan issued data when the component initializes
  }

  // Method to fetch all loan issued data from the service
  showLoanIssued() {
    this.loanissuedService.getAllLoanIssued()
      .subscribe({
        next: (data) => {
          this.loanissued = data; // Assign the fetched data to the loanissued array
          // console.log(this.loanissued); // You can enable this line for debugging purposes
        }
      });
  }

  // Method to delete a loan issued record by its ID
  delete(id: number): void {
    this.router.navigateByUrl('/loanis'); // Navigating to the loanis route (showing loan issued list)
    this.loanissuedService.deleteLoanIssued(id).subscribe(
      () => {
        // On successful deletion, the loan issued list is updated
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted loan', life:5000}); 
        this.showLoanIssued(); // Refresh the loan issued list after deletion
      },
      err => {
        // If there's an error during deletion, handle it here
        console.log('error'); // Log the error to the console
        this.router.navigateByUrl('/loanis'); // Redirect to the loanis route
      }
    );
  }
}
