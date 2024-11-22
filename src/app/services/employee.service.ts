import { Injectable } from '@angular/core'; // Import the Injectable decorator to mark the service class as injectable
import { HttpClient } from '@angular/common/http'; // Import HttpClient to perform HTTP requests
import { Observable } from 'rxjs'; // Import Observable to handle asynchronous operations
import { EmployeeI } from '../models/employee'; // Import the EmployeeI interface which defines the structure of employee data

@Injectable({
  providedIn: 'root' // Specifies that the service is available throughout the entire application
})
export class EmployeeService {

  // Base API URL for the Django backend
  api_uri_django = 'http://localhost:8000';
  // Full path to access the employees endpoint
  base_path = `${this.api_uri_django}/employees/`;

  constructor(
    private http: HttpClient // Inject HttpClient to make HTTP requests
  ) { }

  // Method to fetch all employees from the backend
  getAllEmployee(): Observable<EmployeeI[]> {
    return this.http
      .get<EmployeeI[]>(this.base_path); // Sends a GET request and returns an observable of EmployeeI array
  }

  // Method to fetch a single employee by ID
  getOneEmployee(id: number): Observable<EmployeeI> {
    return this.http
      .get<EmployeeI>(`${this.base_path}${id}`); // Sends a GET request to fetch a specific employee by their ID
  }

  // Method to create a new employee
  createEmployee(data: any): Observable<EmployeeI> {
    return this.http
      .post<EmployeeI>(this.base_path, data); // Sends a POST request to create a new employee with the provided data
  }

  // Method to update an existing employee by ID
  updateEmployee(id: number, data: any): Observable<EmployeeI> {
    return this.http
      .put<EmployeeI>(`${this.base_path}${id}`, data); // Sends a PUT request to update an existing employee by their ID with the new data
  }

  // Method to delete an employee by ID
  deleteEmployee(id: number): Observable<EmployeeI> {
    return this.http
      .delete<EmployeeI>(`${this.base_path}${id}`); // Sends a DELETE request to remove an employee by their ID
  }
}
