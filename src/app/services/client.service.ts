import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientI } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/clients/`

  constructor(
    private http:HttpClient
  ) { }

  getAllClient():Observable<ClientI[]>{
    return this.http
      .get<ClientI[]>(this.base_path)
  }

  getOneClient(id: number):Observable<ClientI>{
    return this.http
      .get<ClientI>(`${this.base_path}${id}`)
  }

  createClient(data: any):Observable<ClientI>{
    return this.http.post<ClientI>(this.base_path, data)
  }

  updateClient(id: number, data: any): Observable<ClientI> {
    return this.http.put<ClientI>(`${this.base_path}${id}`, data);
  }

  deleteClient(id: number): Observable<ClientI> {
    return this.http.delete<ClientI>(`${this.base_path}${id}`);
  }
}

