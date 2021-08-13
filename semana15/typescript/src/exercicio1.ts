/*a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
R:Ao criar uma variavel do tipo string e tenta ser atribuido valor a ela do tipo number, node já aponta erro
*/

//b)
    let myNumber: (number | string ) [] = [26, "Jaqueline"]

//c)
type person = {name: string, age: number, favoriteColor: color}

enum color {
    RED = "Red",
    ORANGE = "Orange",
    YELLOW = "Yellow"
}

const student1: person = {
    name: "Jaqueline",
    age: 26,
    favoriteColor: color.YELLOW
}
const student2: person = {
    name: "Emanuelly",
    age: 27 ,
    favoriteColor: color.RED
}

const student3: person = {
    name: "Ana Luiza",
    age: 18,
    favoriteColor: color.ORANGE
}