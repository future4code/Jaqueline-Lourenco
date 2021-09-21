### Exercício 1

a)Crie uma interface para representar o usuário:
```
export interface User {
    name: string,
    balance: number
}

```
b)Implemente a função:
```
const newUserBalance = (user: User, purchase: number): User | undefined => {
    if(user.balance >= purchase){
        return {
            ...user,
            balance: user.balance - purchase
        }
    } else {
        return undefined
    }
} 
```