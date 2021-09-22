import { performAttack } from "../src"
import { attackerMockSuccess, defenderMockSuccess } from "./mocks/characterMock"
import { validatoMockFailure, validatorMockSuccess } from "./mocks/validatorMock"

describe("Verify after battle status between two characters", () => {
    test("Should return error if ate least one character are invalid", () => {
        expect.assertions(4)

        try{
            const result = performAttack(attackerMockSuccess, defenderMockSuccess, validatoMockFailure)
        
        } catch(error) {
            expect(error.message).toBe("Invalid Character")
            expect(validatoMockFailure).toHaveBeenCalled()
            expect(validatoMockFailure).toHaveBeenCalledTimes(1)
            expect(validatoMockFailure).toHaveReturnedTimes(1)
        }
    })

    test("Should return defender life after attack", () => {
        const result = performAttack(attackerMockSuccess, defenderMockSuccess, validatorMockSuccess)

        expect(result).toBe(1300)
        expect(validatorMockSuccess).toHaveBeenCalled()
        expect(validatorMockSuccess).toHaveBeenCalledTimes(2)
        expect(validatorMockSuccess).toHaveReturnedTimes(2)
    })
})