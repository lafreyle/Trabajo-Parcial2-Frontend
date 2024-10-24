import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentI } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/payments/`

  constructor(
    private http:HttpClient
  ) { }

  getAllPayment():Observable<PaymentI[]>{
    return this.http
      .get<PaymentI[]>(this.base_path)
  }

  getOnePayment(id: number):Observable<PaymentI>{
    return this.http
      .get<PaymentI>(`${this.base_path}${id}`)
  }

  createPayment(data: any):Observable<PaymentI>{
    return this.http.post<PaymentI>(this.base_path, data)
  }

  updatePayment(id: number, data: any): Observable<PaymentI> {
    return this.http.put<PaymentI>(`${this.base_path}${id}`, data);
  }

  deletePayment(id: number): Observable<PaymentI> {
    return this.http.delete<PaymentI>(`${this.base_path}${id}`);
  }
}