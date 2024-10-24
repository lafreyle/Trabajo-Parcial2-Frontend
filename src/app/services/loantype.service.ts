import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanTypeI } from '../models/loantype';

@Injectable({
  providedIn: 'root'
})
export class LoantypeService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/loans/loantype/`

  constructor(
    private http:HttpClient
  ) { }

  getAllLoanType():Observable<LoanTypeI[]>{
    return this.http
      .get<LoanTypeI[]>(this.base_path)
  }

  getOneLoanType(id: number):Observable<LoanTypeI>{
    return this.http
      .get<LoanTypeI>(`${this.base_path}${id}`)
  }

  createLoanType(data: any):Observable<LoanTypeI>{
    return this.http.post<LoanTypeI>(this.base_path, data)
  }

  updateLoanType(id: number, data: any): Observable<LoanTypeI> {
    return this.http.put<LoanTypeI>(`${this.base_path}${id}`, data);
  }

  deleteLoanType(id: number): Observable<LoanTypeI> {
    return this.http.delete<LoanTypeI>(`${this.base_path}${id}`);
  }
}
