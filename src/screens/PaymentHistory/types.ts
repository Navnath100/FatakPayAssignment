export type PaymentSummary = {
    year: string;
    summary: ('NA' | 'PAID' | 'DELAYED')[];
};

export type PaymentHistory = {
    last_updated_on: string;
    payment_summary: PaymentSummary[];
};

export type LoanData = {
    bank_name: string;
    type_of_loan: string;
    issued_on: string;
    account_status: string;
    amount_paid: string;
    total_loan_amount: string;
    loan_tenure: string;
    payment_percentage: number;
    payment_history: PaymentHistory;
};

type Metadata = {
    id: string;
    private: boolean;
    createdAt: string;
    collectionId: string;
    name: string;
};

export type TPaymentHistory = {
    record: {
        data: LoanData;
    };
    metadata: Metadata;
};

export type TIndicator = {
    name: string,
    shortKey: 'NA' | 'PAID' | 'DELAYED'
}
