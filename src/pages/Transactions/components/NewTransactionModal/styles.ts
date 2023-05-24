import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  min-width: 34rem;
  padding: 3rem;
  background: #202024;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.8);
  border-radius: 6px;
  gap: 2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;
      border: 0;
      background: var(--gray-900);
      border-radius: 6px;
      color: var(--gray-200);

      ::placeholder {
        font-size: 1rem;
        line-height: 140%;
        color: var(--gray-400);
      }
    }

    button[type="submit"] {
      padding: 1rem 0;
      background: var(--green-500);
      border-radius: 6px;
      font-weight: bold;
      font-size: 1rem;
      line-height: 160%;
      color: var(--white);
      border: 0;
      transition: background-color 0.2s;
      margin-top: 1.75rem;

      :hover {
        background: var(--green-300);
      }
    }
  }
`

export const Title = styled(Dialog.Title)`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 140%;
  color: var(--gray-100);
`

export const Close = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  color: var(--gray-400);

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 1rem;
`
interface TransactionTypeButtonProps {
  variant: "income" | "outcome"
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
  background: var(--gray-700);
  border-radius: 6px;
  gap: 0.5rem;
  border: 0;
  color: var(--gray-200);
  font-weight: 400;
  font-size: 1rem;
  margin-top: 0.75rem;

  svg {
    color: ${(props) =>
      props.variant === "income" ? "var(--green-300)" : "var(--red-300)"};
  }

  &[data-state="checked"] {
    color: var(--white);
    background: ${(props) =>
      props.value === "income" ? "var(--green-500)" : "var(--red-500)"};
    svg {
      color: var(--white);
    }
  }

  &[data-state="unchecked"]:hover {
    background-color: var(--gray-600);
    transition: background-color 0.2s;
  }
`
