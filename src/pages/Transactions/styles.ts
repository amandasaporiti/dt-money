import styled from 'styled-components'

export const TransactionsContainer = styled.main``

export const TransactionsTableContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 1.5rem auto 0;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: var(--gray-700);

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.p<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income' ? 'var(--green-300)' : 'var(--red-300)'};
`
