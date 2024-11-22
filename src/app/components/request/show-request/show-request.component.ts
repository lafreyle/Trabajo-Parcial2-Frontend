import { Component, OnInit } from '@angular/core';
import { LoanApplicationI } from '../../../models/request'; // Importing the LoanApplicationI interface for typing the requests
import { Router } from '@angular/router'; // Importing Router to navigate between pages
import { RouterModule } from '@angular/router'; // Importing RouterModule for routing functionality
import { TableModule } from 'primeng/table'; // Importing PrimeNG Table module to display data in a table format
import { ButtonModule } from 'primeng/button'; // Importing Button module for action buttons in the template
import { CardModule } from 'primeng/card'; // Importing Card module for displaying content inside cards
import { RequestService } from '../../../services/request.service'; // Importing the service to interact with the backend API for requests

@Component({
  selector: 'app-show-request', // Component selector used in HTML
  standalone: true, // This component is a standalone component
  imports: [TableModule, ButtonModule, CardModule, RouterModule], // Import necessary modules for the component
  templateUrl: './show-request.component.html', // Path to the HTML template
  styleUrls: ['./show-request.component.css'] // Path to the component's CSS for styling
})
export class ShowRequestComponent implements OnInit {
  public requests: LoanApplicationI[] = []; // Array to store the list of loan requests fetched from the backend

  constructor(
    private requestService: RequestService, // Injecting the RequestService to get data from the backend
    private router: Router // Injecting Router to navigate between pages
  ) {}

  ngOnInit(): void {
    this.showRequests(); // Fetch and display the requests when the component is initialized
  }

  // Function to fetch all requests from the backend using the RequestService
  showRequests() {
    this.requestService.getAllRequest()
      .subscribe({
        next: (data) => {
          this.requests = data; // Storing the fetched requests in the 'requests' array
          // Uncomment the following line to log the requests to the console
          // console.log(this.requests);
        }
      });
  }

  // Function to delete a request by its ID
  delete(id: number): void {
    this.router.navigateByUrl('/requests'); // Navigating to the requests list page
    this.requestService.deleteRequest(id).subscribe( // Calling the deleteRequest method from the service
      () => {
        // Uncomment the following line to show a notification for successful deletion
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'Deleted request', life: 5000});
        this.showRequests(); // Refreshing the list of requests after deletion
      },
      err => {
        console.log('Error deleting request'); // Logging an error message if the deletion fails
        this.router.navigateByUrl('/requests'); // Navigating back to the requests list page in case of an error
      }
    );
  }
}
