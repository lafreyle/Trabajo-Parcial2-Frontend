import { Component, OnInit } from '@angular/core';
import { LoanIssuedI } from '../../../models/loanissued';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoanissuedService } from '../../../services/loanissued.service'

@Component({
  selector: 'app-show-loan-issued',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-loan-issued.component.html',
  styleUrl: './show-loan-issued.component.css'
})
export class ShowLoanIssuedComponent implements OnInit{
  public loanissued:LoanIssuedI[] = []
  constructor(
    private loanissuedService: LoanissuedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showLoanIssued()
  }

  showLoanIssued() {
    this.loanissuedService.getAllLoanIssued()
      .subscribe({
        next: (data) => {
          this.loanissued = data
          // console.log(this.loanissued)
        }
      })
  }


  delete(id: number): void{
    this.router.navigateByUrl('/loanis');
    this.loanissuedService.deleteLoanIssued(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted loan', life:5000});
        this.showLoanIssued();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/loanis');

      }
    );
  }
}