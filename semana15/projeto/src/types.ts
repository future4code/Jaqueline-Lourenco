export type accountUser = {
    name: string,
    cpf: string,
    birthDay: string,
    balance: number,
    clienteTransactions: transactions[]
}

export type transactions = {
    value: number,
    transactionsDate: string,
    description: string
}

export type date = {
    day: number,
    month: number,
    year: number
}