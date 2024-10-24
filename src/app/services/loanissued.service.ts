import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanIssuedI } from '../models/loanissued';

@Injectable({
  providedIn: 'root'
})
export class LoanissuedService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/loans/loanis/`

  constructor(
    private http:HttpClient
  ) { }

  getAllLoanIssued():Observable<LoanIssuedI[]>{
    return this.http
      .get<LoanIssuedI[]>(this.base_path)
  }

  getOneLoanIssued(id: number):Observable<LoanIssuedI>{
    return this.http
      .get<LoanIssuedI>(`${this.base_path}${id}`)
  }

  createLoanIssued(data: any):Observable<LoanIssuedI>{
    return this.http.post<LoanIssuedI>(this.base_path, data)
  }

  updateLoanIssued(id: number, data: any): Observable<LoanIssuedI> {
    return this.http.put<LoanIssuedI>(`${this.base_path}${id}`, data);
  }

  deleteLoanIssued(id: number): Observable<LoanIssuedI> {
    return this.http.delete<LoanIssuedI>(`${this.base_path}${id}`);
  }
}

