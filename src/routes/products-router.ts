import {Request, Response, Router} from "express";


const products= [{id: 1, title: 'tomato'}, {id:2, title: 'potato'}, {id: 3, title: 'lalla'}]
export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    if(req.query.title){
        let searchString = req.query.title
        res.send(products.filter( p => p.title.indexOf(searchString.toString()) > -1))
    }else{
        res.send(products)
    }
})

productsRouter.put('/:id', (req: Request, res: Response) => {
    let product = products.find(p => p.id === +req.params.id)
    if(product){
        product.title = req.body.title
        res.send(product)
    }else{
        res.send(404)
    }
})


productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = {
        id: 5,
        title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
})



productsRouter.get('/:id', (req: Request, res: Response) => {
    let id = req.params.id
    let elementProduct = products.find( p => p.id === +id)

    if(elementProduct){
        res.send(elementProduct)
    }else{
        res.send(404)
    }
})




// productsRouter.delete('/:id', (req: Request, res: Response) => {
//     let id = req.params.id
//     let elementProduct = products.find( p => p.id === +id)
//
//     for(let i = 0; i < products.length; i++) {
//         if (products[i].id === +req.params.id) {
//             products.splice(i, 1)
//             res.send(204)
//             return
//         }
//     }
//         res.send(404)
//     })