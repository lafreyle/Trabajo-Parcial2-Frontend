import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../../../services/request.service';
import { Router } from '@angular/router';
import { LoanApplicationI } from '../../../models/request';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.css'
})
export class CreateRequestComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup;

  // Injecting the RequestService
  requestService = inject(RequestService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Initializing the form group with validation
    this.form = this.formBuilder.group({
      id: [''],
      application_date: ['', [Validators.required]],
      status: ['', [Validators.required]],
      client: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      loan_type: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Logic to execute when component is initialized (if needed)
  }

  // Method to handle form submission
  onSubmit(): void {
    const formValue: LoanApplicationI = this.form.value;
    console.log(formValue);
    this.requestService.createRequest(formValue).subscribe(
      () => {
        // On success, navigate to the requests page
        this.router.navigateByUrl('requests');
      },
      err => {
        // Handle error case
        console.error('Error creating request', err);
      }
    );
  }

  // Method to cancel and navigate back to the requests page
  cancel() {
    this.router.navigateByUrl('/requests');
  }

  // Getter methods for form controls
  get application_date() { return this.form.get('application_date'); }
  get status() { return this.form.get('status'); }
  get client() { return this.form.get('client'); }
  get employee() { return this.form.get('employee'); }
  get loan_type() { return this.form.get('loan_type'); }
}


