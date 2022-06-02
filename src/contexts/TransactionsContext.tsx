import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { api } from '../services'
import { CreateTransactionModel, TransactionModel } from '../types'

export type TransactionsContextData = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  transactionList: TransactionModel[]
  setTransactionList: (list: TransactionModel[]) => void
  loadTransactions: () => Promise<void>
  createTransaction: (data: CreateTransactionModel) => Promise<void>
}

export type TransactionsContextProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextData)

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactionList, setTransactionList] = useState<TransactionModel[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const loadTransactions = async () => {
    const { data } = await api.get('transactions')
    setTransactionList(data.transactions)
  }

  const createTransaction = async (input: CreateTransactionModel) => {
    const { data } = await api.post('/transactions', {
      ...input,
      date: new Date(),
    })
    setTransactionList((oldState) => [...oldState, data.transaction])
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        isLoading,
        setIsLoading,
        transactionList,
        setTransactionList,
        loadTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionsContext)
