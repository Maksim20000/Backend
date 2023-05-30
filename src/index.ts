import express, {Request, Response} from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    let hellowWorld = 'Hellow world!!'
    res.send(hellowWorld)
})

app.listen(port, () => {
    console.log('Вроде все работает ')
})