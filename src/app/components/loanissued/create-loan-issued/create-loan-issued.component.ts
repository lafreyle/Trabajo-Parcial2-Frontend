import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanissuedService } from '../../../services/loanissued.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoanIssuedI } from '../../../models/loanissued';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-create-loan-issued',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-loan-issued.component.html',
  styleUrl: './create-loan-issued.component.css'
})
export class CreateLoanIssuedComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;

  loanissuedService = inject(LoanissuedService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form =this.formBuilder.group({
      id: [''],
      loan: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      loan_date: ['', [Validators.required]],
      
    });

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: LoanIssuedI = this.form.value;
    console.log(formValue);
    this.loanissuedService.createLoanIssued(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Creado', life:5000});

    //  }, 0);
    console.log(formValue)
        this.router.navigateByUrl('loanis');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/loanis');
  }

  get loan() { return this.form.get('loan'); }
  get employee() { return this.form.get('employee'); }
  get loan_date() { return this.form.get('loan_date'); }

}


