export interface PaymentI {
    id?: number;
    payment_date: Date
    amount: number
    status: string
    loan: number
    client: number
}
