import { Component, OnInit } from '@angular/core'; // Import necessary Angular core modules
import { EmployeeI } from '../../../models/employee'; // Import the Employee interface for type safety
import { Router } from '@angular/router'; // Import Router for navigation
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { TableModule } from 'primeng/table'; // Import PrimeNG Table module for displaying data in a table format
import { ButtonModule } from 'primeng/button'; // Import PrimeNG Button module for UI buttons
import { CardModule } from 'primeng/card'; // Import PrimeNG Card module for UI cards
import { EmployeeService } from '../../../services/employee.service'; // Import the service for employee-related API calls

@Component({
  selector: 'app-show-employee', // Selector for the component
  standalone: true, // Indicates that this component is standalone
  imports: [TableModule, ButtonModule, CardModule, RouterModule], // Import necessary modules for this component
  templateUrl: './show-employee.component.html', // Path to the component's HTML template
  styleUrls: ['./show-employee.component.css'] // Path to the component's CSS styles (corrected from styleUrl to styleUrls)
})
export class ShowEmployeeComponent implements OnInit {
  public employees: EmployeeI[] = []; // Array to hold the list of employees

  constructor(
    private employeeService: EmployeeService, // Inject EmployeeService for API calls
    private router: Router // Inject Router for navigation
  ) { }

  ngOnInit(): void {
    // Lifecycle hook that is called after the component is initialized
    this.showEmployees(); // Call method to fetch and display employees
  }

  showEmployees() {
    // Method to fetch all employees from the service
    this.employeeService.getAllEmployee()
      .subscribe({
        next: (data) => {
          this.employees = data; // Assign fetched data to the employees array
          // console.log(this.employees); // Uncomment to log the employees for debugging
        }
      });
  }

  delete(id: number): void {
    // Method to delete an employee by ID
    this.router.navigateByUrl('/employees'); // Navigate to the employees list page
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        // Uncomment the following line to show a notification on successful deletion
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'Deleted employee', life:5000});
        this.showEmployees(); // Refresh the employee list after deletion
      },
      err => {
        console.log('error'); // Log error for debugging
        this.router.navigateByUrl('/employees'); // Navigate to the employees list page on error
      }
    );
  }
}