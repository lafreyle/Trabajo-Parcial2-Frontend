import { Injectable } from '@angular/core'; // To define this service as injectable
import { HttpClient } from '@angular/common/http'; // To handle HTTP requests
import { Observable } from 'rxjs'; // To handle asynchronous requests
import { LoanIssuedI } from '../models/loanissued'; // Importing the LoanIssuedI interface for the loan issued data structure

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class LoanissuedService {
  
  // Base URL for Django API (local development)
  api_uri_django = 'http://localhost:8000';
  
  // Full endpoint for managing loan issued records
  base_path = `${this.api_uri_django}/loans/loanis/`;

  // Injecting HttpClient to make HTTP requests
  constructor(private http: HttpClient) { }

  // Fetches all loan issued records
  getAllLoanIssued(): Observable<LoanIssuedI[]> {
    return this.http.get<LoanIssuedI[]>(this.base_path); // Sends a GET request to retrieve all loan issued records
  }

  // Fetches a single loan issued record by its ID
  getOneLoanIssued(id: number): Observable<LoanIssuedI> {
    return this.http.get<LoanIssuedI>(`${this.base_path}${id}`); // Sends a GET request to fetch a specific loan issued record by ID
  }

  // Creates a new loan issued record
  createLoanIssued(data: any): Observable<LoanIssuedI> {
    return this.http.post<LoanIssuedI>(this.base_path, data); // Sends a POST request to create a new loan issued record
  }

  // Updates an existing loan issued record by its ID
  updateLoanIssued(id: number, data: any): Observable<LoanIssuedI> {
    return this.http.put<LoanIssuedI>(`${this.base_path}${id}`, data); // Sends a PUT request to update a loan issued record by ID
  }

  // Deletes a loan issued record by its ID
  deleteLoanIssued(id: number): Observable<LoanIssuedI> {
    return this.http.delete<LoanIssuedI>(`${this.base_path}${id}`); // Sends a DELETE request to remove a loan issued record by ID
  }
}
