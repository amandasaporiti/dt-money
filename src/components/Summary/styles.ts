import styled from "styled-components"

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1120px;
  gap: 2rem;
  margin: 0 auto;
  margin-top: -4rem;
  padding: 0 1.5rem;
`

interface SummaryCardProps {
  variant?: "var(--green-700)"
}

export const SummaryCard = styled.div<SummaryCardProps>`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.variant ? "var(--green-700)" : "var(--gray-600)"};
  padding: 1.5rem 2rem;
  border-radius: 6px;
  gap: 12px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: var(--gray-200);
    }
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: 2rem;
    line-height: 140%;
    color: var(--gray-100);
  }
`
