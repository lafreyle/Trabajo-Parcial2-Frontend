import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../../../services/loan.service';
import { LoanI } from '../../../models/loan';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-loan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-loan.component.html',
  styleUrl: './update-loan.component.css'
})
export class UpdateLoanComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;
 
  loanService = inject(LoanService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getLoan(this.id);

  }

  getLoan(id: number){
    this.loanService.getOneLoan(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        // console.log(data.cliente)
      }
    })
  }


  onSubmit(): void {
    const formValue: LoanI = this.form.value;
    const id: number =  this.form.value.id
    this.loanService.updateLoan(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});

    //  }, 0);
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

