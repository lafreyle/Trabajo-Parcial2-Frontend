import { Component, OnInit } from '@angular/core';
import { EmployeeI } from '../../../models/employee';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EmployeeService } from '../../../services/employee.service'

@Component({
  selector: 'app-show-employee',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-employee.component.html',
  styleUrl: './show-employee.component.css'
})
export class ShowEmployeeComponent implements OnInit{
  public employees:EmployeeI[] = []
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showEmployees()
  }

  showEmployees() {
    this.employeeService.getAllEmployee()
      .subscribe({
        next: (data) => {
          this.employees = data
          // console.log(this.employees)
        }
      })
  }


  delete(id: number): void{
    this.router.navigateByUrl('/employees');
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted employee', life:5000});
        this.showEmployees();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/employees');

      }
    );
  }
}
