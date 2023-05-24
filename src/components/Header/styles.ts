import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: var(--gray-900);
  padding: 2.5rem 0 7.65rem;
  display: flex;
  justify-content: center;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;
  background: var(--green-500);
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 160%;
  color: var(--white);
  text-align: center;
  border: 0;

  :hover {
    background: var(--green-300);
    transition: background-color 0.2s;
  }
`
