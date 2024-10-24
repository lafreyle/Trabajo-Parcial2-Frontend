import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanI } from '../models/loan';

@Injectable({
  providedIn: 'root'
})

export class LoanService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/loans/loan/`

  constructor(
    private http:HttpClient
  ) { }

  getAllLoan():Observable<LoanI[]>{
    return this.http
      .get<LoanI[]>(this.base_path)
  }

  getOneLoan(id: number):Observable<LoanI>{
    return this.http
      .get<LoanI>(`${this.base_path}${id}`)
  }

  createLoan(data: any):Observable<LoanI>{
    return this.http.post<LoanI>(this.base_path, data)
  }

  updateLoan(id: number, data: any): Observable<LoanI> {
    return this.http.put<LoanI>(`${this.base_path}${id}`, data);
  }

  deleteLoan(id: number): Observable<LoanI> {
    return this.http.delete<LoanI>(`${this.base_path}${id}`);
  }
}
