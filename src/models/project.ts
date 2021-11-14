export interface AmountCurrency {
  amount: number
  currency: string
}

export interface IProjectDetails {
  date: string
  gateway?: string
  transactionId: string
  amount: AmountCurrency
}
