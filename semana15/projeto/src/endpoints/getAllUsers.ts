import { Request, Response } from 'express'
import { users } from '../data'
import { accountUser } from '../types'

export const getAllUsers = (
    req: Request,
    res: Response
) : void => {
    let codeError: number = 400

    try{
        const allUsers: accountUser[] | [] =users

        if (!allUsers) {
            codeError = 500
            throw new Error ("Bad requst! Please, try again later!")
        }
        if (allUsers[0].cpf.length !== 11) {
            codeError = 401
            throw new Error ("CPF precisa ter 11 digitos!")
        }
        res.status(200).send(allUsers)
    
    }catch (error) {
        res.status(codeError).send({ message: error.message})
    }
}