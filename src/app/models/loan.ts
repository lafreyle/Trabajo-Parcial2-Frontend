export interface LoanI {
    id?: number;
    amount: number
    interest_rate: number
    disbursement_date: Date
    due_date: Date
    employee: number
    status: string
    loan_type: number
    client: number

}