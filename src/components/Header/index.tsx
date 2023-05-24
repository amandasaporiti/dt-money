import * as Dialog from "@radix-ui/react-dialog"

import dtMoneyLogo from "../../assets/dt-money-logo.svg"
import { NewTransactionModal } from "../../pages/Transactions/components/NewTransactionModal"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtMoneyLogo} alt="Logo Controle de Finanças DT Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
