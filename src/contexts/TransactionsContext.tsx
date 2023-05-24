import { ReactNode, useEffect, useState, useCallback } from "react"
import { api } from "../server/api"

import { createContext } from "use-context-selector"

interface Transaction {
  id: number
  description: string
  price: number
  category: string
  type: "income" | "outcome"
  createdAt: string
}

interface CreateNewTransactionInput {
  description: string
  category: string
  price: number
  type: "income" | "outcome"
}

interface TransactionsContextData {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: CreateNewTransactionInput) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextData)

export const TransactionsProvider = ({
  children,
}: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createNewTransaction = useCallback(
    async (data: CreateNewTransactionInput) => {
      const { description, category, price, type } = data

      const response = await api.post("/transactions", {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    []
  )

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
