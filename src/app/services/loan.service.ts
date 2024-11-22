import { Injectable } from '@angular/core'; // Importing the Injectable decorator
import { HttpClient } from '@angular/common/http'; // Importing HttpClient to make HTTP requests
import { Observable } from 'rxjs'; // Importing Observable to handle asynchronous operations
import { LoanI } from '../models/loan'; // Importing the LoanI interface for loan data structure

@Injectable({
  providedIn: 'root' // This marks the service to be available globally across the app
})

export class LoanService {

  // The base API URI for the Django backend
  api_uri_django = 'http://localhost:8000';
  
  // The full API endpoint for loans
  base_path = `${this.api_uri_django}/loans/loan/`;

  // Injecting HttpClient to send HTTP requests
  constructor(private http: HttpClient) { }

  // Method to retrieve all loans from the backend
  getAllLoan(): Observable<LoanI[]> {
    return this.http
      .get<LoanI[]>(this.base_path); // Sends a GET request to the /loans/loan/ endpoint to fetch all loans
  }

  // Method to retrieve a single loan by its ID
  getOneLoan(id: number): Observable<LoanI> {
    return this.http
      .get<LoanI>(`${this.base_path}${id}`); // Sends a GET request to fetch a specific loan using the loan ID
  }

  // Method to create a new loan
  createLoan(data: any): Observable<LoanI> {
    return this.http.post<LoanI>(this.base_path, data); // Sends a POST request to create a new loan
  }

  // Method to update an existing loan by ID
  updateLoan(id: number, data: any): Observable<LoanI> {
    return this.http.put<LoanI>(`${this.base_path}${id}`, data); // Sends a PUT request to update the loan data
  }

  // Method to delete a loan by its ID
  deleteLoan(id: number): Observable<LoanI> {
    return this.http.delete<LoanI>(`${this.base_path}${id}`); // Sends a DELETE request to remove the loan by ID
  }
}
