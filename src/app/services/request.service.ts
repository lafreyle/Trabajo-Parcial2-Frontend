import { Injectable } from '@angular/core'; // Marks this service as injectable for DI
import { HttpClient } from '@angular/common/http'; // HttpClient is used to make HTTP requests
import { Observable } from 'rxjs'; // Observable is used to handle asynchronous operations
import { LoanApplicationI } from '../models/request'; // The model representing loan application data

@Injectable({
  providedIn: 'root' // The service is provided globally in the app
})
export class RequestService {
  // API base URI for the Django backend
  api_uri_django = 'http://localhost:8000';
  
  // The endpoint for loan application requests
  base_path = `${this.api_uri_django}/requests/`;

  // Injecting HttpClient to enable making HTTP requests
  constructor(private http: HttpClient) { }

  // Method to fetch all loan applications
  getAllRequest(): Observable<LoanApplicationI[]> {
    return this.http.get<LoanApplicationI[]>(this.base_path); // Sends GET request to get all loan applications
  }

  // Method to fetch a specific loan application by ID
  getOneRequest(id: number): Observable<LoanApplicationI> {
    return this.http.get<LoanApplicationI>(`${this.base_path}${id}`); // Sends GET request to get one loan application by ID
  }

  // Method to create a new loan application
  createRequest(data: any): Observable<LoanApplicationI> {
    return this.http.post<LoanApplicationI>(this.base_path, data); // Sends POST request to create a new loan application
  }

  // Method to update an existing loan application by ID
  updateRequest(id: number, data: any): Observable<LoanApplicationI> {
    return this.http.put<LoanApplicationI>(`${this.base_path}${id}`, data); // Sends PUT request to update an existing loan application
  }

  // Method to delete a loan application by ID
  deleteRequest(id: number): Observable<LoanApplicationI> {
    return this.http.delete<LoanApplicationI>(`${this.base_path}${id}`); // Sends DELETE request to remove a loan application
  }
}
