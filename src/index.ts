import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addresses-router";
import {tovarsRouter} from "./routes/tovars-router";

const app = express()
const port = 3000

const middleWare = bodyParser({})
app.use(middleWare)
app.use('/products', productsRouter)
app.use('/address', addressesRouter)
app.use('/tovars', tovarsRouter)

app.get('/', (req: Request, res: Response) => {
    let hellowWorld = 'Начальный экран'
    res.send(hellowWorld)
})

app.listen(port, () => {
    console.log('Вроде все работает ')
})