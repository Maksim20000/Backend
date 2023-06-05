import {Request, Response, Router} from "express";
const address = [{id: 1, value: "Moskov"}, {id: 2,value: 'Vladivostok'}]


export const addressesRouter = Router({})

addressesRouter.post('/', (req: Request, res: Response) => {
    let newPostAddress = {
        id: 10,
        value: req.body.value
    }
    address.push(newPostAddress)
    res.status(200).send(newPostAddress)
})



addressesRouter.get('/:idUser', (req: Request, res: Response) => {
    let UserId = req.params.idUser
    let elementAddressId = address.find( a => a.id === +UserId)
    if(elementAddressId){
        res.send(elementAddressId)
    }else{
        res.send(404)
    }
})

addressesRouter.put('/:id', (req: Request, res: Response) => {
    let addressUpdate = address.find(p => p.id === +req.params.id)
    if(addressUpdate){
        addressUpdate.value = req.body.value
        res.send(addressUpdate)
    }
})

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(address)
})
addressesRouter.delete('/:idUser', (req: Request, res: Response) => {
    for(let i=0; i < address.length; i++){
        if(address[i].id === +req.params.idUser){
            address.splice(i, 1)
            res.send(204)

            return
        }
    }

    res.send(404)
})
