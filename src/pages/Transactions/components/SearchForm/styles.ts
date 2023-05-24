import styled from "styled-components"

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1120px;
  width: 100%;
  padding: 0 1.5rem;
  margin: 4rem auto 0;

  input {
    flex: 1;
    background-color: var(--gray-900);
    padding: 1rem;
    color: var(--gray-100);
    border: 0;
    border-radius: 6px;

    ::placeholder {
      font-weight: 400;
      font-size: 1rem;
      line-height: 140%;
      color: var(--gray-400);
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid var(--green-300);
    font-weight: bold;
    border-radius: 6px;
    padding: 1rem 2rem;
    text-align: center;
    background: transparent;
    color: var(--green-300);
    transition: background-color 0.2s, color 0.2s, border 0.2s;

    :hover {
      background: var(--green-300);
      color: var(--white);
    }
  }
`
