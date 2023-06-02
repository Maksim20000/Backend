import express, {Request, Response} from 'express'
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    let hellowWorld = 'Начальный экран'
    res.send(hellowWorld)
})

const products= [{id: 1, title: 'tomato'}, {id:2, title: 'potato'}]
const address = [{id: 1, value: "Moskov"}, {id: 2,value: 'Vladivostok'}]
app.get('/products', (req: Request, res: Response) => {
    if(req.query.title){
        let searchString = req.query.title
        res.send(products.filter( p => p.title.indexOf(searchString.toString()) > -1))
    }else{
        res.send(products)
    }
    res.send(products)
})





app.get('/products/:id', (req: Request, res: Response) => {
    let id = req.params.id
    let elementProduct = products.find( p => p.id === +id)

    if(elementProduct){
        res.send(elementProduct)
    }else{
        res.send(404)
    }
})





app.get('/address/:idUser', (req: Request, res: Response) => {
    let UserId = req.params.idUser
    let elementAddressId = address.find( a => a.id === +UserId)
    if(elementAddressId){
        res.send(elementAddressId)
    }else{
        res.send(404)
    }
})

app.listen(port, () => {
    console.log('Вроде все работает ')
})