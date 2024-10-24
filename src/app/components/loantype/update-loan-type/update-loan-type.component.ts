import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { LoantypeService } from '../../../services/loantype.service';
import { LoanTypeI } from '../../../models/loantype';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-loan-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-loan-type.component.html',
  styleUrl: './update-loan-type.component.css'
})
export class UpdateLoanTypeComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;
 
  loantypeService = inject(LoantypeService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.form =this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getLoanType(this.id);

  }

  getLoanType(id: number){
    this.loantypeService.getOneLoanType(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        // console.log(data.loantype)
      }
    })
  }


  onSubmit(): void {
    const formValue: LoanTypeI = this.form.value;
    const id: number =  this.form.value.id
    this.loantypeService.updateLoanType(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});

    //  }, 0);
        this.router.navigateByUrl('loantype');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/loantype');
  }

  get name() { return this.form.get('name'); }

}
  
