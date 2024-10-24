import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { LoanApplicationI } from '../../../models/request';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-request.component.html',
  styleUrl: './update-request.component.css'
})
export class UpdateRequestComponent implements OnInit{
  public id: number =0;
  public form: FormGroup;
 
  requestService = inject(RequestService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getRequest(this.id);

  }

  getRequest(id: number){
    this.requestService.getOneRequest(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data)
        // console.log(data.cliente)
      }
    })
  }


  onSubmit(): void {
    const formValue: LoanApplicationI = this.form.value;
    const id: number =  this.form.value.id
    this.requestService.updateRequest(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Actualizado', life:5000});

    //  }, 0);
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

