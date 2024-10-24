import { Component, OnInit } from '@angular/core';
import { PaymentI } from '../../../models/payment';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaymentService } from '../../../services/payment.service'

@Component({
  selector: 'app-show-payment',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-payment.component.html',
  styleUrl: './show-payment.component.css'
})
export class ShowPaymentComponent implements OnInit{
  public payments:PaymentI[] = []
  constructor(
    private paymentService: PaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showPayments()
  }

  showPayments() {
    this.paymentService.getAllPayment()
      .subscribe({
        next: (data) => {
          this.payments = data
          // console.log(this.payments)
        }
      })
  }


  delete(id: number): void{
    this.router.navigateByUrl('/payments');
    this.paymentService.deletePayment(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted payment', life:5000});
        this.showPayments();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/payments');

      }
    );
  }
}

