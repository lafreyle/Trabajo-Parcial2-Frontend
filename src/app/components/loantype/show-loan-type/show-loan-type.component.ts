import { Component, OnInit } from '@angular/core';
import { LoanTypeI } from '../../../models/loantype';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoantypeService } from '../../../services/loantype.service'

@Component({
  selector: 'app-show-loan-type',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-loan-type.component.html',
  styleUrl: './show-loan-type.component.css'
})
export class ShowLoanTypeComponent implements OnInit{
  public loantype:LoanTypeI[] = []
  constructor(
    private loantypeService: LoantypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showLoanType()
  }

  showLoanType() {
    this.loantypeService.getAllLoanType()
      .subscribe({
        next: (data) => {
          this.loantype = data
          // console.log(this.loantype)
        }
      })
  }


  delete(id: number): void{
    this.router.navigateByUrl('/loantype');
    this.loantypeService.deleteLoanType(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted loan', life:5000});
        this.showLoanType();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/loantype');

      }
    );
  }
}


