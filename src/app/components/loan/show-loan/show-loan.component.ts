import { Component, OnInit } from '@angular/core'; // Import necessary Angular core modules
import { LoanI } from '../../../models/loan'; // Import LoanI interface for loan data structure
import { Router } from '@angular/router'; // Import Router for navigation
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { TableModule } from 'primeng/table'; // Import TableModule for displaying data in a table
import { ButtonModule } from 'primeng/button'; // Import ButtonModule for button UI component
import { CardModule } from 'primeng/card'; // Import CardModule for card UI component
import { LoanService } from '../../../services/loan.service'; // Import LoanService to handle loan-related operations

@Component({
  selector: 'app-show-loan', // Define the selector for this component
  standalone: true, // Indicate that this component is standalone
  imports: [TableModule, ButtonModule, CardModule, RouterModule], // Specify the modules to import
  templateUrl: './show-loan.component.html', // Specify the HTML template for this component
  styleUrls: ['./show-loan.component.css'] // Specify the CSS styles for this component
})
export class ShowLoanComponent implements OnInit {
  public loans: LoanI[] = []; // Declare an array to hold loan data

  constructor(
    private loanService: LoanService, // Inject LoanService for use in this component
    private router: Router // Inject Router for navigation
  ) { }

  ngOnInit(): void {
    this.showLoans(); // Call the method to fetch and display loans when the component initializes
  }

  showLoans() {
    // Fetch all loans from the loan service
    this.loanService.getAllLoan()
      .subscribe({
        next: (data) => {
          this.loans = data; // Assign the fetched loan data to the loans array
          // console.log(this.loans); // Uncomment to log the loans data to the console
        }
      });
  }

  delete(id: number): void {
    // Navigate to the loans page before deleting
    this.router.navigateByUrl('/loans');
    this.loanService.deleteLoan(id).subscribe(
      () => {
        // this.messageService.add({ severity: 'warn', summary: 'Notification', detail: 'Deleted loan', life: 5000 }); // Uncomment to show a notification after deletion
        this.showLoans(); // Refresh the loan list after deletion
      },
      err => {
        console.log('error'); // Log error if deletion fails
        this.router.navigateByUrl('/loans'); // Navigate to the loans page on error
      }
    );
  }
}

