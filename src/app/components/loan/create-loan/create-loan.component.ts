import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanService } from '../../../services/loan.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoanI } from '../../../models/loan';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
@Component({
  selector: 'app-create-loan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-loan.component.html',
  styleUrl: './create-loan.component.css'
})
export class CreateLoanComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;

  loanService = inject(LoanService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form =this.formBuilder.group({
      id: [''],
      amount: ['', [Validators.required]],
      interest_rate: ['', [Validators.required]],
      disbursement_date: ['', [Validators.required]],
      due_date: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      status: ['', [Validators.required]],
      loan_type: ['', [Validators.required]],
      client: ['', [Validators.required]],
  
    });

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: LoanI = this.form.value;
    console.log(formValue);
    this.loanService.createLoan(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Create Loan', life:5000});

    //  }, 0);
    console.log(formValue)
        this.router.navigateByUrl('loans');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/loans');
  }

  get amount() { return this.form.get('amount'); }
  get interest_rate() { return this.form.get('interest_rate'); }
  get disbursement_date() { return this.form.get('disbursement_date'); }
  get due_date() { return this.form.get('due_date'); }
  get employee() { return this.form.get('employee'); }
  get status() { return this.form.get('status'); }
  get loan_type() { return this.form.get('loan_type'); }
  get client() { return this.form.get('client'); }

}


