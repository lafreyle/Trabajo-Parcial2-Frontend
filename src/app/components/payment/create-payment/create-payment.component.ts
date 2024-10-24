import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../../services/payment.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { PaymentI } from '../../../models/payment';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-create-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-payment.component.html',
  styleUrl: './create-payment.component.css'
})
export class CreatePaymentComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;

  paymentService = inject(PaymentService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form =this.formBuilder.group({
      id: [''],
      payment_date: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      status: ['', [Validators.required]],
      loan: ['', [Validators.required]],
      client: ['', [Validators.required]],
  
    });

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: PaymentI = this.form.value;
    console.log(formValue);
    this.paymentService.createPayment(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Creado', life:5000});

    //  }, 0);
    console.log(formValue)
        this.router.navigateByUrl('payments');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/payments');
  }

  get payment_date() { return this.form.get('payment_date'); }
  get amount() { return this.form.get('amount'); }
  get status() { return this.form.get('status'); }
  get loan() { return this.form.get('loan'); }
  get client() { return this.form.get('client'); }

}

