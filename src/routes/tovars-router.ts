import {Router} from "express";
import {tovarsRepositiry} from "../repositories/tovars-repositiry";

export const tovarsRouter = Router({})


tovarsRouter.get('/', (req, res) => {
    const allTovars = tovarsRepositiry.getAllTovars()
    res.send(allTovars)
})
tovarsRouter.put('/:id', (req, res) => {
    const id = +req.params.id
    const title = req.body.title
    let result = tovarsRepositiry.updateTitle(id, title)
    res.send(result)
})

tovarsRouter.post('/', (req, res) => {
    let title = req.body.title
    const addNewTovar = tovarsRepositiry.addNewTovar(title)
    res.status(200).send(addNewTovar)
})
tovarsRouter.delete('/:id', (req, res) => {
    let id = +req.params.id
    const resultDelete = tovarsRepositiry.deleteTovar(id)
    res.send(resultDelete)
})