import express, {Request, Response} from 'express'
import bodyParser from "body-parser";

const app = express()
const port = 3000

const middleWare = bodyParser({})
app.use(middleWare)

app.get('/', (req: Request, res: Response) => {
    let hellowWorld = 'Начальный экран'
    res.send(hellowWorld)
})

const products= [{id: 1, title: 'tomato'}, {id:2, title: 'potato'}, {id: 3, title: 'lalla'}]
const address = [{id: 1, value: "Moskov"}, {id: 2,value: 'Vladivostok'}]
const tovars = [{id: 1, title: 'попа'}, {id: 2, title: 'сиси'}, {id: 3, title: 'гандн'}]

app.get('/tovars', (req, res) => {
    res.send(tovars)
})
app.put('/tovars/:id', (req, res) => {
    let updateTitle = tovars.find(t => t.id === +req.params.id)
    if(updateTitle){
        updateTitle.title = req.body.title
        res.send(updateTitle)
    }else{
        res.send(404)
    }
})

app.post('/tovars', (req, res) => {
    let NewTowar = {
        id: 10,
        title: req.body.title
    }
    tovars.push(NewTowar)
    res.status(200).send(NewTowar)
})
app.delete('/tovars/:id', (req, res) => {
    for(let i = 0; i<tovars.length; i++){
        if( tovars[i].id === +req.params.id){
            tovars.splice(i, 1)
            res.send(204)

            return
        }
    }
    res.send(404)
})


app.get('/products', (req: Request, res: Response) => {
    if(req.query.title){
        let searchString = req.query.title
        res.send(products.filter( p => p.title.indexOf(searchString.toString()) > -1))
    }else{
        res.send(products)
    }
})

app.put('/products/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id)
    if(product){
        product.title = req.body.title
        res.send(product)
    }else{
        res.send(404)
    }
})


app.post('/products', (req: Request, res: Response) => {
    const newProduct = {
            id: 5,
            title: req.body.title
        }
    products.push(newProduct)
    res.status(201).send(newProduct)
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


app.post('/address', (req: Request, res: Response) => {
    let newPostAddress = {
        id: 10,
        value: req.body.value
    }
    address.push(newPostAddress)
    res.status(200).send(newPostAddress)
})
app.delete('/products/:id', (req: Request, res: Response) => {
    let id = req.params.id
    let elementProduct = products.find( p => p.id === +id)

    for(let i = 0; i < products.length; i++){
        if(products[i].id === +req.params.id){
            products.splice(i, 1)
            res.send(204)

            return
        }
    }

    res.send(404)

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

app.put('/address/:id', (req: Request, res: Response) => {
    let addressUpdate = address.find(p => p.id === +req.params.id)
    if(addressUpdate){
        addressUpdate.value = req.body.value
        res.send(addressUpdate)
    }
})

app.get('/address', (req: Request, res: Response) => {
    res.send(address)
})
app.delete('/address/:idUser', (req: Request, res: Response) => {
    for(let i=0; i < address.length; i++){
        if(address[i].id === +req.params.idUser){
            address.splice(i, 1)
            res.send(204)

            return
        }
    }

    res.send(404)
})


app.listen(port, () => {
    console.log('Вроде все работает ')
})