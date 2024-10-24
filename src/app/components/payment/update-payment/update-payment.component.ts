import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../../services/payment.service';
import { PaymentI } from '../../../models/payment';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-payment.component.html',
  styleUrl: './update-payment.component.css'
})
export class UpdatePaymentComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;
 
  paymentService = inject(PaymentService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getPayment(this.id);

  }

  getPayment(id: number){
    this.paymentService.getOnePayment(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        // console.log(data.cliente)
      }
    })
  }


  onSubmit(): void {
    const formValue: PaymentI = this.form.value;
    const id: number =  this.form.value.id
    this.paymentService.updatePayment(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});

    //  }, 0);
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

