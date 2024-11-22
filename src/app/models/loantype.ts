export interface LoanTypeI {
    id: number; // Required: Unique identifier for the loan type (primary key in database)
    name: string; // Required: Name or description of the loan type (e.g., "Personal Loan", "Mortgage", etc.)
}

//id: A required field that serves as the unique identifier for each loan type. It would typically be the primary key in the database.
//name: A required field that stores the name or description of the loan type, such as "Home Loan", "Car Loan", "Business Loan", etc. This is how different loan categories will be identified in the system.