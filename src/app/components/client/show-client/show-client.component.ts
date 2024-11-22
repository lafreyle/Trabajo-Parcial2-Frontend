import { Component, OnInit } from '@angular/core'; // Import necessary Angular core modules
import { ClientI } from '../../../models/client'; // Import the Client interface for type safety
import { Router } from '@angular/router'; // Import Router for navigation
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { TableModule } from 'primeng/table'; // Import PrimeNG Table module for displaying data in a table format
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module for UI buttons
import { CardModule } from 'primeng/card'; // Import PrimeNG Card module for UI cards
import { ClientService } from '../../../services/client.service'; // Import the service for client-related API calls

@Component({
  selector: 'app-show-client', // Selector for the component
  standalone: true, // Indicates that this component is standalone
  imports: [TableModule, ButtonModule, CardModule, RouterModule], // Import necessary modules for this component
  templateUrl: './show-client.component.html', // Path to the component's HTML template
  styleUrls: ['./show-client.component.css'] // Path to the component's CSS styles (corrected from styleUrl to styleUrls)
})
export class ShowClientComponent implements OnInit {
  public clients: ClientI[] = []; // Array to hold the list of clients

  constructor(
    private clientService: ClientService, // Inject ClientService for making API calls
    private router: Router // Inject Router for navigation
  ) { }

  ngOnInit(): void {
    // Lifecycle hook that is called after the component is initialized
    this.showClients(); // Call the method to fetch and display clients
  }

  showClients() {
    // Method to fetch all clients from the server
    this.clientService.getAllClient()
      .subscribe({
        next: (data) => {
          this.clients = data; // Assign the fetched data to the clients array
          // console.log(this.clients); // Uncomment to log the clients for debugging
        }
      });
  }

  delete(id: number): void {
    // Method to delete a client by ID
    this.router.navigateByUrl('/clients'); // Navigate to the clients list page
    this.clientService.deleteClient(id).subscribe(
      () => {
        // On successful deletion, refresh the clients list
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted client', life:5000}); // Uncomment to show a notification
        this.showClients(); // Refresh the clients list
      },
      err => {
        // Handle error during deletion
        console.log('error'); // Log the error for debugging
        this.router.navigateByUrl('/clients'); // Navigate back to the clients list page
      }
    );
  }
}