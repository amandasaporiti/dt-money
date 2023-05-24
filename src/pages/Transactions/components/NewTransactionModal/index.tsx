import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'

import { useContextSelector } from 'use-context-selector'

import {
  Overlay,
  Content,
  Title,
  Close,
  TransactionType,
  TransactionTypeButton,
} from './styles'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContext } from 'react'

const newTransactionModalSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionModalSchema>

export const NewTransactionModal = () => {
  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createNewTransaction
    },
  )

  const { register, handleSubmit, control, reset } =
    useForm<NewTransactionFormInputs>({
      resolver: zodResolver(newTransactionModalSchema),
      defaultValues: {
        type: 'income',
      },
    })

  const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
    const { description, category, price, type } = data

    await createNewTransaction({
      description,
      category,
      price,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Nova transação</Title>

        <Close>
          <X size={24} />
        </Close>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            step=".01"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton
                    type="button"
                    variant="income"
                    value="income"
                  >
                    <ArrowCircleUp size={24} /> Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton
                    type="button"
                    variant="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
