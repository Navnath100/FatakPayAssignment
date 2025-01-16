import { TIndicator } from "./types";

export const loanDetails = {
  "record": {
    "data": {
      "bank_name": "HDFC Bank",
      "type_of_loan": "Personal loan",
      "issued_on": "25 Jun 2023",
      "account_status": "Active",
      "amount_paid": "₹25,000",
      "total_loan_amount": "₹50,000",
      "loan_tenure": "12 months",
      "payment_percentage": 50,
      "payment_history": {
        "last_updated_on": "05 May 2024",
        "payment_summary": [
          {
            "year": "2023",
            "summary": ["PAID", "PAID", "PAID", "DELAYED", "DELAYED", "NA", "NA", "PAID", "NA", "PAID", "PAID", "NA"]
          },
          {
            "year": "2024",
            "summary": ["NA", "PAID", "PAID", "NA", "PAID", "DELAYED", "PAID", "NA", "NA", "NA", "PAID", "NA"]
          },
          {
            "year": "2025",
            "summary": ["NA", "NA", "PAID", "PAID", "NA", "NA", "NA", "DELAYED", "PAID", "PAID", "NA", "PAID"]
          },
          {
            "year": "2026",
            "summary": ["DELAYED", "NA", "PAID", "NA", "PAID", "PAID", "NA", "PAID", "PAID", "NA", "NA", "NA"]
          },
          {
            "year": "2027",
            "summary": ["NA", "NA", "NA", "PAID", "DELAYED", "NA", "PAID", "NA", "PAID", "PAID", "PAID", "NA"]
          },
          {
            "year": "2028",
            "summary": ["NA", "NA", "PAID", "PAID", "NA", "NA", "DELAYED", "PAID", "PAID", "PAID", "NA", "NA"]
          }
        ]

      }
    }
  },
  "metadata": {
    "id": "6784e91ae41b4d34e476a11d",
    "private": false,
    "createdAt": "2025-01-13T10:21:14.099Z",
    "collectionId": "6784e89ee41b4d34e476a0ee",
    "name": "screen_two_json"
  }
}

export const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const indicators : TIndicator[] = [
  {
    name: 'Not Available',
    shortKey: 'NA'
  },
  {
    name: 'On Time Payment',
    shortKey: 'PAID'
  },
  {
    name: 'Delayed',
    shortKey: 'DELAYED'
  }
]