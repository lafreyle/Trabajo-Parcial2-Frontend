import { Injectable } from '@angular/core'; // Marks this service as injectable
import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests
import { Observable } from 'rxjs'; // For handling asynchronous operations
import { PaymentI } from '../models/payment'; // Import the PaymentI interface to type payment data

@Injectable({
  providedIn: 'root' // This makes the service available globally in the application
})
export class PaymentService {
  
  // The base URL for the Django backend (local development URL)
  api_uri_django = 'http://localhost:8000';
  
  // The full endpoint path for the payments API
  base_path = `${this.api_uri_django}/payments/`;

  // Injecting HttpClient into the constructor to enable HTTP requests
  constructor(private http: HttpClient) { }

  // Method to get all payments from the backend
  getAllPayment(): Observable<PaymentI[]> {
    return this.http.get<PaymentI[]>(this.base_path); // Sends a GET request to retrieve all payments
  }

  // Method to get a single payment by its ID
  getOnePayment(id: number): Observable<PaymentI> {
    return this.http.get<PaymentI>(`${this.base_path}${id}`); // Sends a GET request to retrieve a payment by its ID
  }

  // Method to create a new payment
  createPayment(data: any): Observable<PaymentI> {
    return this.http.post<PaymentI>(this.base_path, data); // Sends a POST request to create a new payment
  }

  // Method to update an existing payment by its ID
  updatePayment(id: number, data: any): Observable<PaymentI> {
    return this.http.put<PaymentI>(`${this.base_path}${id}`, data); // Sends a PUT request to update a payment
  }

  // Method to delete a payment by its ID
  deletePayment(id: number): Observable<PaymentI> {
    return this.http.delete<PaymentI>(`${this.base_path}${id}`); // Sends a DELETE request to remove a payment
  }
}
