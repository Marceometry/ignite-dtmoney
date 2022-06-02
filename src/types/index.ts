export type TransactionType = 'income' | 'outcome'

export type SummaryItem = {
  type: TransactionType | 'total'
  value: number
}

export type TransactionModel = {
  id: number
  title: string
  category: string
  type: string
  amount: number
  date: string
}

export type CreateTransactionModel = Omit<TransactionModel, 'id' | 'date'>
