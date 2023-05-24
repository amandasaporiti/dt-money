import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { TransactionsContext } from "../../../../contexts/TransactionsContext"
import { useContextSelector } from "use-context-selector"

const searchFormSchemma = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchemma>

export const SearchForm = () => {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    }
  )

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchemma),
  })

  const handleSearchTransactions = (data: SearchFormInput) => {
    fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register("query")}
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
