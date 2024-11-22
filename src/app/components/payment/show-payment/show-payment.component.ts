import { Component, OnInit } from '@angular/core';
import { PaymentI } from '../../../models/payment';  // Import the Payment interface to define the payment object structure
import { Router } from '@angular/router';  // Import Router for navigation
import { RouterModule } from '@angular/router';  // Import RouterModule for routing functionalities
import { TableModule } from 'primeng/table';  // Import PrimeNG Table module to display data in a table format
import { ButtonModule } from 'primeng/button';  // Import PrimeNG Button module for UI buttons
import { CardModule } from 'primeng/card';  // Import PrimeNG Card module for wrapping content in a styled card
import { PaymentService } from '../../../services/payment.service';  // Import the service to interact with payment API

@Component({
  selector: 'app-show-payment',  // Define the component selector for use in HTML templates
  standalone: true,  // Marks the component as standalone, so no module is needed for it to work
  imports: [TableModule, ButtonModule, CardModule, RouterModule],  // Declare the necessary modules for the component
  templateUrl: './show-payment.component.html',  // Link to the HTML template file
  styleUrls: ['./show-payment.component.css']  // Link to the CSS file for styling the component
})
export class ShowPaymentComponent implements OnInit {
  public payments: PaymentI[] = [];  // Define an array to hold the payment data fetched from the API
  
  constructor(
    private paymentService: PaymentService,  // Inject the PaymentService to make API calls
    private router: Router  // Inject Router to enable navigation to different views
  ) { }

  ngOnInit(): void {
    this.showPayments();  // Call the showPayments method to fetch data when the component initializes
  }

  showPayments() {
    this.paymentService.getAllPayment()  // Call the service method to fetch all payments from the API
      .subscribe({
        next: (data) => {
          this.payments = data;  // Assign the fetched data to the 'payments' array
          // console.log(this.payments);  // Optionally, you can log the payments data to the console for debugging
        }
      })
  }

  delete(id: number): void {
    this.router.navigateByUrl('/payments');  // Navigate back to the payments list page after deleting the payment
    this.paymentService.deletePayment(id).subscribe(
      () => {
        // Uncomment the following line to show a success message (if using a message service):
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted payment', life:5000});
        this.showPayments();  // Re-fetch the payments list after deletion to reflect the changes
      },
      err => {
        console.log('error');  // Log an error message if the deletion fails
        this.router.navigateByUrl('/payments');  // Navigate back to the payments list even if there is an error
      }
    );
  }
}
