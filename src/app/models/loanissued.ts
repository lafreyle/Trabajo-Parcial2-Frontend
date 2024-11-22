export interface LoanIssuedI {
    id?: number; // Optional: Unique identifier for the loan issuance (primary key in database)
    loan: number; // Required: The ID of the loan that has been issued (foreign key referencing the Loan entity)
    employee: number; // Required: The ID of the employee who issued the loan (foreign key referencing the Employee entity)
    loan_date: Date; // Required: The date the loan was issued to the client
}
//id?: The id field is optional, as it may not be required when creating a new loan issuance. The ID is typically auto-generated when the loan issuance record is created.
//loan: This is a foreign key referencing the Loan entity. It indicates which loan has been issued.
//employee: This is a foreign key referencing the Employee entity. It represents the employee who authorized or processed the loan issuance.
//loan_date: The date when the loan was officially issued to the client, marking the start of the loan's disbursement.