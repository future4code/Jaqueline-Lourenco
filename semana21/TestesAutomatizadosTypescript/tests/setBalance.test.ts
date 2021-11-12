import { newUserBalance } from '../src/index'
import { User } from '../src/types'

describe("Test if user have enought balance amount to purchese new itens", () => {
//a)Faça um teste com um usuário com o saldo maior do que o valor de compra
    test("Test if balance is bigger than purchase price", () => {
        const input = 40
        const output: User | undefined = newUserBalance({name: "Jaqueline", balance: 300}, input)

        output? expect(output).toEqual({
            name: "Jaqueline",
            balance: 80
        }) : expect(output).toBe(undefined)
    })
//b)Faça um teste com um usuário com o saldo igual ao valor de compra
    test("Test if balance is equal to purchase price", () => {
        const input = 300
        const output: User | undefined = newUserBalance({name: "Jaqueline", balance: 300}, input)

        output ? expect(output.balance).toBe(0) : expect(output).toBe(undefined)
    })
//c)Faça um teste com um usuário com o saldo menor do que o valor de compra
    test("Test if balance is lesser than purchase price", () => {
        const input = 220
        const output: User | undefined = newUserBalance({name: "Jaqueline", balance: 100}, input)

        expect(output).not.toBeDefined()
        //output ? expect(output.balance).toBe(0) : expect(output).toBe(undefined)
    })
})