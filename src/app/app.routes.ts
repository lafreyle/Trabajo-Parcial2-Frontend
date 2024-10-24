import { Routes } from '@angular/router';
import { ShowClientComponent } from './components/client/show-client/show-client.component';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';

import { ShowEmployeeComponent } from './components/employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';

import { ShowLoanComponent } from './components/loan/show-loan/show-loan.component';
import { CreateLoanComponent } from './components/loan/create-loan/create-loan.component';
import { UpdateLoanComponent } from './components/loan/update-loan/update-loan.component';

import { ShowPaymentComponent } from './components/payment/show-payment/show-payment.component';
import { CreatePaymentComponent } from './components/payment/create-payment/create-payment.component';
import { UpdatePaymentComponent } from './components/payment/update-payment/update-payment.component';

import { ShowRequestComponent } from './components/request/show-request/show-request.component';
import { CreateRequestComponent } from './components/request/create-request/create-request.component';
import { UpdateRequestComponent } from './components/request/update-request/update-request.component';

import { ShowLoanTypeComponent } from './components/loantype/show-loan-type/show-loan-type.component';
import { CreateLoanTypeComponent } from './components/loantype/create-loan-type/create-loan-type.component';
import { UpdateLoanTypeComponent } from './components/loantype/update-loan-type/update-loan-type.component';

import { ShowLoanIssuedComponent } from './components/loanissued/show-loan-issued/show-loan-issued.component';
import { CreateLoanIssuedComponent } from './components/loanissued/create-loan-issued/create-loan-issued.component';
import { UpdateLoanIssuedComponent } from './components/loanissued/update-loan-issued/update-loan-issued.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    {
        path: "clients",
        component: ShowClientComponent
    },
    {
        path: "clients/new",
        component: CreateClientComponent
    },
    {
        path: "clients/edit/:id",
        component: UpdateClientComponent
    },

    {
        path: "employees",
        component: ShowEmployeeComponent
    },
    {
        path: "employees/new",
        component: CreateEmployeeComponent
    },
    {
        path: "employees/edit/:id",
        component: UpdateEmployeeComponent
    },

    {
        path: "loans",
        component: ShowLoanComponent
    },
    {
        path: "loans/new",
        component: CreateLoanComponent
    },
    {
        path: "loans/edit/:id",
        component: UpdateLoanComponent
    },

    {
        path: "payments",
        component: ShowPaymentComponent
    },
    {
        path: "payments/new",
        component: CreatePaymentComponent
    },
    {
        path: "payments/edit/:id",
        component: UpdatePaymentComponent
    },

    {
        path: "requests",
        component: ShowRequestComponent
    },
    {
        path: "requests/new",
        component: CreateRequestComponent
    },
    {
        path: "requests/edit/:id",
        component: UpdateRequestComponent
    },

    {
        path: "loantype",
        component: ShowLoanTypeComponent
    },
    {
        path: "loantype/new",
        component: CreateLoanTypeComponent
    },
    {
        path: "loantype/edit/:id",
        component: UpdateLoanTypeComponent
    },

    {
        path: "loanis",
        component: ShowLoanIssuedComponent
    },
    {
        path: "loanis/new",
        component: CreateLoanIssuedComponent
    },
    {
        path: "loanissued/edit/:id",
        component: UpdateLoanIssuedComponent
    },
];
