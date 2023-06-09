import express, {NextFunction, Request, Response} from 'express'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addresses-router";
import {tovarsRouter} from "./routes/tovars-router";
import {addressRepositiry} from "./repositories/address-repositiry";

const app = express()
const port = 3000

let requestCounter = 0
const requestCounterMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    if(requestCounter > 3){
        res.send('Много запросов нарушаем' + requestCounter)
        next()
    }else {
        requestCounter ++
        next()
    }
}

const blablaNiddleWare = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.blabla = '12345'
    next()
}

const guardMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    if(req.query.token === '12345'){
        next()
    }else{
        res.send(401)
    }
}

const middleWare = bodyParser({})
app.use(middleWare, blablaNiddleWare, guardMiddleWare, requestCounterMiddleWare)
app.use('/products', productsRouter)
app.use('/address', addressesRouter)
app.use('/tovars', tovarsRouter)

app.get('/blabla',(req: Request, res: Response) => {
        // @ts-ignore
        const blabla = req.blabla
        res.send({value: blabla})
    })

app.get('/', (req: Request, res: Response) => {
    let hellowWorld = 'Начальный экран'
    res.send(hellowWorld)
})

app.listen(port, () => {
    console.log('Вроде все работает ')
})