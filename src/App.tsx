import { TransactionsProvider } from "./contexts/TransactionsContext"
import { Transactions } from "./pages/Transactions"
import { GlobalSyles } from "./styles/global"

export const App = () => {
  return (
    <TransactionsProvider>
      <GlobalSyles />
      <Transactions />
    </TransactionsProvider>
  )
}
