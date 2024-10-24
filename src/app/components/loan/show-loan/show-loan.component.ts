import { Component, OnInit } from '@angular/core';
import { LoanI } from '../../../models/loan';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoanService } from '../../../services/loan.service'

@Component({
  selector: 'app-show-loan',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-loan.component.html',
  styleUrl: './show-loan.component.css'
})
export class ShowLoanComponent implements OnInit{
  public loans:LoanI[] = []
  constructor(
    private loanService: LoanService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showLoans()
  }

  showLoans() {
    this.loanService.getAllLoan()
      .subscribe({
        next: (data) => {
          this.loans = data
          // console.log(this.loans)
        }
      })
  }


  delete(id: number): void{
    this.router.navigateByUrl('/loans');
    this.loanService.deleteLoan(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted loan', life:5000});
        this.showLoans();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/loans');

      }
    );
  }
}

