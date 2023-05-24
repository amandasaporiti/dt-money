import { useContextSelector } from "use-context-selector"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { dateFormatter, priceFormatter } from "../../utils/formatter"
import { SearchForm } from "./components/SearchForm"
import {
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableContainer,
  PriceHighlight,
} from "./styles"

export const Transactions = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <TransactionsContainer>
      <Header />
      <Summary />
      <SearchForm />
      <TransactionsTableContainer>
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </TransactionsContainer>
  )
}
