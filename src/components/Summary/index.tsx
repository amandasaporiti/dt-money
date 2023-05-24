import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"
import { useSummary } from "../../hooks/useSummary"
import { priceFormatter } from "../../utils/formatter"
import { SummaryContainer, SummaryCard } from "./styles"

export const Summary = () => {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="var(--green-700)">
        <header>
          <p>Total</p>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
