/*a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
    
    R:Ao criar uma variavel do tipo string e tenta ser atribuido valor a ela do tipo number, node já aponta erro
*/

//b)
    let myNumber: (number | string ) [] = [26, "Jaqueline"]

//c)
    type person = {
        name: string, 
        age: number, 
        favoriteColor: string
    }

    
    const student1: person = {
        name: "Jaqueline",
        age: 26,
        favoriteColor: "Black"
    }
    const student2: person = {
        name: "Emanuelly",
        age: 27 ,
        favoriteColor: "Red"
    }
    
    const student3: person = {
        name: "Ana Luiza",
        age: 18,
        favoriteColor: "Gray"
    }

    //d)

    enum COLOR {
        RED = "Red",
        ORANGE = "Orange",
        YELLOW = "Yellow",
        BLUE = "Blue",
        GREEN = "Green"
    }

    type personColor = {
        name: string, 
        age: number, 
        favoriteColor: COLOR
    }

    const student1Color: person = {
        name: "Jaqueline",
        age: 26,
        favoriteColor: COLOR.ORANGE
    }
    const student2Color: person = {
        name: "Emanuelly",
        age: 27 ,
        favoriteColor: COLOR.RED
    }
    
    const student3Color: person = {
        name: "Ana Luiza",
        age: 18,
        favoriteColor: COLOR.YELLOW
    }

