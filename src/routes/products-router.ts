import {Request, Response, Router} from "express";
import {productsRepositiry} from "../repositories/products-repositiry";


export const productsRouter = Router({})

// функция которая ищет продукты по query
productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepositiry.findProducts(req.query.title ? req.query.title.toString() : null)
    res.send(foundProducts).status(400)
})

productsRouter.put('/:id', (req: Request, res: Response) => {
    let bodyTitle = req.body.title
    let id = +req.params.id
    let UpdateNewProduct = productsRepositiry.updateProducts(id, bodyTitle)

    if(UpdateNewProduct){
        let product = productsRepositiry.getProductById(id)
        res.send(product)
    }else {
        res.status(404)
    }
})

// содает новый продукт
productsRouter.post('/', (req: Request, res: Response) => {
    let newProduct = productsRepositiry.createProduct(req.body.title)
    res.send(newProduct)
})



productsRouter.get('/:id', (req: Request, res: Response) => {
    let id = req.params.id
    let product = productsRepositiry.getProductById(+id)

    if(product){
        res.send(product)
    }else{
        res.send(404)
    }
})

productsRouter.delete('/:id', (req: Request, res: Response) => {
    let id = req.params.id
    let isDeleted = productsRepositiry.deleteProduct(+id)
    if(isDeleted){
        res.send(204)
    }else{
        res.send(404)
    }
    })