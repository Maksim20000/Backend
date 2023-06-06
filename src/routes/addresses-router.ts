import {Request, Response, Router} from "express";
import {addressRepositiry} from "../repositories/address-repositiry";

export const addressesRouter = Router({})

// добавление нового поста
addressesRouter.post('/', (req: Request, res: Response) => {
    let newAddress = addressRepositiry.createNewAddress(req.body.value)
    res.send(newAddress)
})


// ищет по id адрес
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let id = +req.params.id
    let resultAdress = addressRepositiry.searchAdressById(id)
    res.send(resultAdress)
})


addressesRouter.put('/:id', (req: Request, res: Response) => {
    let id = +req.params.id
    let value = req.body.value
    let result =  addressRepositiry.updateAdress(id, value)
    res.send(result)
})

// получение всех адресов
addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addressRepositiry.getAdresses())
})

// удаление определенного адреса
addressesRouter.delete('/:id', (req: Request, res: Response) => {
    let id = +req.params.id
    let result = addressRepositiry.deleteAdress(id)

    res.send(result)
})
