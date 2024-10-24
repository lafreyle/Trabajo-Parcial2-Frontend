import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanApplicationI } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/requests/`

  constructor(
    private http:HttpClient
  ) { }

  getAllRequest():Observable<LoanApplicationI[]>{
    return this.http
      .get<LoanApplicationI[]>(this.base_path)
  }

  getOneRequest(id: number):Observable<LoanApplicationI>{
    return this.http
      .get<LoanApplicationI>(`${this.base_path}${id}`)
  }

  createRequest(data: any):Observable<LoanApplicationI>{
    return this.http.post<LoanApplicationI>(this.base_path, data)
  }

  updateRequest(id: number, data: any): Observable<LoanApplicationI> {
    return this.http.put<LoanApplicationI>(`${this.base_path}${id}`, data);
  }

  deleteRequest(id: number): Observable<LoanApplicationI> {
    return this.http.delete<LoanApplicationI>(`${this.base_path}${id}`);
  }
}
