import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { LoanissuedService } from '../../../services/loanissued.service';
import { LoanIssuedI } from '../../../models/loanissued';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-loan-issued',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-loan-issued.component.html',
  styleUrl: './update-loan-issued.component.css'
})
export class UpdateLoanIssuedComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;
 
  loanissuedService = inject(LoanissuedService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.form =this.formBuilder.group({
      id: [''],
      loan: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      loan_date: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getLoanIssued(this.id);

  }

  getLoanIssued(id: number){
    this.loanissuedService.getOneLoanIssued(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        // console.log(data.cliente)
      }
    })
  }


  onSubmit(): void {
    const formValue: LoanIssuedI = this.form.value;
    const id: number =  this.form.value.id
    this.loanissuedService.updateLoanIssued(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});

    //  }, 0);
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
