export interface LoanApplicationI {
    id?: number; // Optional: Unique identifier for the loan application (primary key in the database, may not be required if automatically generated)
    application_date: Date; // Required: The date when the loan application was submitted
    status: string; // Required: The status of the loan application (e.g., 'Pending', 'Approved', 'Rejected')
    client: number; // Required: The ID of the client who is applying for the loan (foreign key referencing the Client model)
    employee: number; // Required: The ID of the employee handling the loan application (foreign key referencing the Employee model)
    loan_type: number; // Required: The ID of the loan type being applied for (foreign key referencing the LoanType model)
}

//id: An optional field representing the unique identifier of the loan application. It might be automatically generated when a new loan application is created.
//application_date: The date on which the loan application is made. This helps in tracking the timeline of the application.
//status: The status of the loan application, indicating its current state (e.g., 'Pending', 'Approved', 'Rejected').
//client: The ID of the client applying for the loan. This is a foreign key that links to the Client model, representing the person making the loan request.
//employee: The ID of the employee handling the loan application. This is a foreign key that references the Employee model, representing the person processing the loan application.
//loan_type: The ID of the loan type that is being applied for. This is a foreign key that links to the LoanType model, allowing the system to categorize the application according to different loan types (e.g., personal, business).