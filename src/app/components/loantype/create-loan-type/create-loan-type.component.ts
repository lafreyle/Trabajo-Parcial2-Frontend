import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoantypeService } from '../../../services/loantype.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoanTypeI } from '../../../models/loantype';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-create-loan-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-loan-type.component.html',
  styleUrl: './create-loan-type.component.css'
})
export class CreateLoanTypeComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;

  loantypeService = inject(LoantypeService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form =this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
  
    });

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: LoanTypeI = this.form.value;
    console.log(formValue);
    this.loantypeService.createLoanType(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Creado', life:5000});

    //  }, 0);
    console.log(formValue)
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

