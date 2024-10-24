import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeI } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/employees/`

  constructor(
    private http:HttpClient
  ) { }

  getAllEmployee():Observable<EmployeeI[]>{
    return this.http
      .get<EmployeeI[]>(this.base_path)
  }

  getOneEmployee(id: number):Observable<EmployeeI>{
    return this.http
      .get<EmployeeI>(`${this.base_path}${id}`)
  }

  createEmployee(data: any):Observable<EmployeeI>{
    return this.http.post<EmployeeI>(this.base_path, data)
  }

  updateEmployee(id: number, data: any): Observable<EmployeeI> {
    return this.http.put<EmployeeI>(`${this.base_path}${id}`, data);
  }

  deleteEmployee(id: number): Observable<EmployeeI> {
    return this.http.delete<EmployeeI>(`${this.base_path}${id}`);
  }
}


