// Importing necessary components for the routes
import { Routes } from '@angular/router';  // Import the Routes type from Angular's router module
import { ShowClientComponent } from './components/client/show-client/show-client.component';  // Component to display client data
import { CreateClientComponent } from './components/client/create-client/create-client.component';  // Component to create a new client
import { UpdateClientComponent } from './components/client/update-client/update-client.component';  // Component to edit an existing client

import { ShowEmployeeComponent } from './components/employee/show-employee/show-employee.component';  // Component to display employee data
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';  // Component to create a new employee
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';  // Component to edit an existing employee

import { ShowLoanComponent } from './components/loan/show-loan/show-loan.component';  // Component to display loan data
import { CreateLoanComponent } from './components/loan/create-loan/create-loan.component';  // Component to create a new loan
import { UpdateLoanComponent } from './components/loan/update-loan/update-loan.component';  // Component to edit an existing loan

import { ShowPaymentComponent } from './components/payment/show-payment/show-payment.component';  // Component to display payment data
import { CreatePaymentComponent } from './components/payment/create-payment/create-payment.component';  // Component to create a new payment
import { UpdatePaymentComponent } from './components/payment/update-payment/update-payment.component';  // Component to edit an existing payment

import { ShowRequestComponent } from './components/request/show-request/show-request.component';  // Component to display loan request data
import { CreateRequestComponent } from './components/request/create-request/create-request.component';  // Component to create a new loan request
import { UpdateRequestComponent } from './components/request/update-request/update-request.component';  // Component to edit an existing loan request

import { ShowLoanTypeComponent } from './components/loantype/show-loan-type/show-loan-type.component';  // Component to display loan type data
import { CreateLoanTypeComponent } from './components/loantype/create-loan-type/create-loan-type.component';  // Component to create a new loan type
import { UpdateLoanTypeComponent } from './components/loantype/update-loan-type/update-loan-type.component';  // Component to edit an existing loan type

import { ShowLoanIssuedComponent } from './components/loanissued/show-loan-issued/show-loan-issued.component';  // Component to display loan issued data
import { CreateLoanIssuedComponent } from './components/loanissued/create-loan-issued/create-loan-issued.component';  // Component to create a new loan issued entry
import { UpdateLoanIssuedComponent } from './components/loanissued/update-loan-issued/update-loan-issued.component';  // Component to edit an existing loan issued entry

// Routes configuration array
export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/',  // Default route, redirect to home page
        pathMatch: 'full'  // Ensures that the entire URL path is matched
    },
    {
        path: "clients",  // Route to display the list of clients
        component: ShowClientComponent
    },
    {
        path: "clients/new",  // Route to create a new client
        component: CreateClientComponent
    },
    {
        path: "clients/edit/:id",  // Route to update an existing client (dynamic :id for client ID)
        component: UpdateClientComponent
    },

    {
        path: "employees",  // Route to display the list of employees
        component: ShowEmployeeComponent
    },
    {
        path: "employees/new",  // Route to create a new employee
        component: CreateEmployeeComponent
    },
    {
        path: "employees/edit/:id",  // Route to update an existing employee (dynamic :id for employee ID)
        component: UpdateEmployeeComponent
    },

    {
        path: "loans",  // Route to display the list of loans
        component: ShowLoanComponent
    },
    {
        path: "loans/new",  // Route to create a new loan
        component: CreateLoanComponent
    },
    {
        path: "loans/edit/:id",  // Route to update an existing loan (dynamic :id for loan ID)
        component: UpdateLoanComponent
    },

    {
        path: "payments",  // Route to display the list of payments
        component: ShowPaymentComponent
    },
    {
        path: "payments/new",  // Route to create a new payment
        component: CreatePaymentComponent
    },
    {
        path: "payments/edit/:id",  // Route to update an existing payment (dynamic :id for payment ID)
        component: UpdatePaymentComponent
    },

    {
        path: "requests",  // Route to display the list of loan requests
        component: ShowRequestComponent
    },
    {
        path: "requests/new",  // Route to create a new loan request
        component: CreateRequestComponent
    },
    {
        path: "requests/edit/:id",  // Route to update an existing loan request (dynamic :id for request ID)
        component: UpdateRequestComponent
    },

    {
        path: "loantype",  // Route to display the list of loan types
        component: ShowLoanTypeComponent
    },
    {
        path: "loantype/new",  // Route to create a new loan type
        component: CreateLoanTypeComponent
    },
    {
        path: "loantype/edit/:id",  // Route to update an existing loan type (dynamic :id for loan type ID)
        component: UpdateLoanTypeComponent
    },

    {
        path: "loanis",  // Route to display the list of loan issued
        component: ShowLoanIssuedComponent
    },
    {
        path: "loanis/new",  // Route to create a new loan issued entry
        component: CreateLoanIssuedComponent
    },
    {
        path: "loanissued/edit/:id",  // Route to update an existing loan issued entry (dynamic :id for loan issued ID)
        component: UpdateLoanIssuedComponent
    },
];
