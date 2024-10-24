import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../../services/request.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoanApplicationI } from '../../../models/request';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-create-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.css'
})
export class CreateRequestComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;

  requestService = inject(RequestService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form =this.formBuilder.group({
      id: [''],
      application_date: ['', [Validators.required]],
      status: ['', [Validators.required]],
      client: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      loan_type: ['', [Validators.required]],
  
    });

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: LoanApplicationI = this.form.value;
    console.log(formValue);
    this.requestService.createRequest(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Creado', life:5000});

    //  }, 0);
    console.log(formValue)
        this.router.navigateByUrl('requests');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/requests');
  }

  get application_date() { return this.form.get('application_date'); }
  get status() { return this.form.get('status'); }
  get client() { return this.form.get('client'); }
  get employee() { return this.form.get('employee'); }
  get loan_type() { return this.form.get('loan_type'); }

}


