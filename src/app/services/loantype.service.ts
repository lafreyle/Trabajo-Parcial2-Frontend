import { Injectable } from '@angular/core'; // Marks the service as injectable
import { HttpClient } from '@angular/common/http'; // For making HTTP requests
import { Observable } from 'rxjs'; // To handle asynchronous data streams
import { LoanTypeI } from '../models/loantype'; // Importing the LoanTypeI interface, which defines the structure of loan type data

@Injectable({
  providedIn: 'root' // Makes the service available across the application
})
export class LoantypeService {
  
  // The base URL for the Django API (local development setup)
  api_uri_django = 'http://localhost:8000';
  
  // Full endpoint for managing loan types
  base_path = `${this.api_uri_django}/loans/loantype/`;

  // Injecting the HttpClient to perform HTTP requests
  constructor(private http: HttpClient) { }

  // Method to get all loan types from the backend
  getAllLoanType(): Observable<LoanTypeI[]> {
    return this.http.get<LoanTypeI[]>(this.base_path); // Sends a GET request to fetch all loan types
  }

  // Method to get a specific loan type by ID
  getOneLoanType(id: number): Observable<LoanTypeI> {
    return this.http.get<LoanTypeI>(`${this.base_path}${id}`); // Sends a GET request to fetch a loan type by its ID
  }

  // Method to create a new loan type
  createLoanType(data: any): Observable<LoanTypeI> {
    return this.http.post<LoanTypeI>(this.base_path, data); // Sends a POST request to create a new loan type
  }

  // Method to update an existing loan type by ID
  updateLoanType(id: number, data: any): Observable<LoanTypeI> {
    return this.http.put<LoanTypeI>(`${this.base_path}${id}`, data); // Sends a PUT request to update an existing loan type by ID
  }

  // Method to delete a loan type by ID
  deleteLoanType(id: number): Observable<LoanTypeI> {
    return this.http.delete<LoanTypeI>(`${this.base_path}${id}`); // Sends a DELETE request to remove a loan type by ID
  }
}
