import { Injectable } from '@angular/core'; // Import the Injectable decorator for service
import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests
import { Observable } from 'rxjs'; // Import Observable for async data handling
import { ClientI } from '../models/client'; // Import the ClientI interface, which represents the structure of the client data

@Injectable({
  providedIn: 'root' // Specifies that this service is available throughout the application
})
export class ClientService {

  // The base API URL for the Django backend
  api_uri_django = 'http://localhost:8000'; 
  // Full path for the 'clients' API endpoint
  base_path = `${this.api_uri_django}/clients/`; 

  constructor(
    private http: HttpClient // Inject HttpClient to make HTTP requests
  ) { }

  // Method to get all clients from the backend
  getAllClient(): Observable<ClientI[]> {
    return this.http
      .get<ClientI[]>(this.base_path); // Perform a GET request and return an observable of ClientI array
  }

  // Method to get a single client by ID
  getOneClient(id: number): Observable<ClientI> {
    return this.http
      .get<ClientI>(`${this.base_path}${id}`); // Perform a GET request with the client's ID to fetch specific client data
  }

  // Method to create a new client
  createClient(data: any): Observable<ClientI> {
    return this.http
      .post<ClientI>(this.base_path, data); // Perform a POST request to create a new client with the provided data
  }

  // Method to update an existing client
  updateClient(id: number, data: any): Observable<ClientI> {
    return this.http
      .put<ClientI>(`${this.base_path}${id}`, data); // Perform a PUT request to update a specific client with the new data
  }

  // Method to delete a client by ID
  deleteClient(id: number): Observable<ClientI> {
    return this.http
      .delete<ClientI>(`${this.base_path}${id}`); // Perform a DELETE request to remove a client by ID
  }
}


