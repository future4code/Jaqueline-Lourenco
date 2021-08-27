import express, {Express, Request, Response } from "express"
import cors from "cors"
import { countries }from "./data"
import { country } from "./types"

//Endpoint 1 Buscar todos os países

const app: Express = express() 
app.use(express.json())
app.use(cors())

app.get("/countries", (req:Request, res:Response) => {
    res.send(countries)
})

//Endpoint 2 Buscar país por id

app.get("/coutries/:id", (req:Request , res:Response) => {

    const result = countries.find(
        (country) => { return country.id === Number (req.params.id)}
    )

    if ( result === undefined ) {
        res.status(404).send("Country not found!")
    } else {
        res.send(result)
    }
})

//Endpoint 3 Busca com filtros

app.get("/coutries/search", (req:Request , res:Response) => {
    let result: country[] = countries;
    
    try {
        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Invalid Parameters")
        }
        if (req.query.name) {
            result = result.filter((country) =>
            country.name.includes(req.query.name as string)
            )
        }
        if (req.query.capital) {
            result = result.filter((country) =>
            country.name.includes(req.query.name as string)
            )
        }
        if (req.query.continent) {
            result = result.filter((country) => 
            country.continent.includes(req.query.continent as string)
            )
        }
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//Endpoint 4 Editar país

app.post("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400
    
    try{
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
            )
        if  (countryIndex === -1){
            errorCode = 404
            throw new Error()
        }
        if (!req.body.name && !req.body.capital){
            throw new Error("Ivalid Parameters")
        }
        if (req.body.name) {
            countries[countryIndex].name = req.body.name
        }
        if (req.query.capital) {
            countries[countryIndex].capital = req.body.capital
        }
        res.status(200).send("Country successfully updated")  
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})
//Endpoint 5 Deletar país

app.delete("/countries/:id", (req:Request, res:Response) => {
    let errorCode: number = 400
    
    try {
        
        const authorization = req.headers.authorization as string
        
        if ( !authorization || authorization.length < 10 ) {
            res.statusCode = 401
            throw new Error("Not authorized. Check authorization!")
        }

        const countryIndex = countries.findIndex(
            (country) => { return country.id === Number(req.params.id) }
        )

        if (countryIndex === -1) {
            res.statusCode = 404
            throw new Error("Country not found!")
        }
        
        countries.splice(countryIndex, 1)
        
        res.status(200).send("Delete Country successfully!")
        
    }  catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})

//Endpoint 6 Criar país

app.post("/countries" , (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const authorization: string = req.headers.authorization as string

        if (!authorization || authorization.length < 10) {
            errorCode = 401
            throw new Error("Unauthorized")
        }
        if (!req.body.name && !req.body.capital && !req.body.continent) {
            throw new Error("Invalid Parameters")
        }
        const countryName: number = countries.findIndex(
            (country) => country.name === req.body.name
        )
        if (countryName !== -1) {
            errorCode = 409
            throw new Error("Country already exists")
        }

        const newCountry: country = {
            id: Date.now(),
            name: req.body.name,
            capital: req.body.capital,
            continent: req.body.continent
        }
        countries.push(newCountry)
        res.status(200).send({ message: "Success!!", country: newCountry })
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server Ready!")
})