import { accountUser } from './types'

export const users: accountUser[] = [
    {
        name: "Jaqueline",
        cpf: "42899872522",
        birthDay: "27/08/1994",
        balance: 350,
        clienteTransactions: [
            {
                value: 50,
                transactionsDate: "15/02/2021",
                description: "Caixa pix"
            },
            {
                value: 90,
                transactionsDate: "20/01/2020",
                description: "Parcela cartão - BabyCalçados"
            }
        ]
    },
    {
        name: "Emanuelly",
        cpf: "328.008.755.00",
        birthDay: "21/07/1992",
        balance: 270,
        clienteTransactions: [
            {
                value: 150,
                transactionsDate: "20/12/2014",
                description: "Deposito - Pedro"
            }
        ]
    },
    {
        name: "Paola",
        cpf: "555.025.972.50",
        birthDay: "23/12/1987",
        balance: 900,
        clienteTransactions: []
    }
]