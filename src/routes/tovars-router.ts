import {Router} from "express";
const tovars = [{id: 1, title: 'попа'}, {id: 2, title: 'сиси'}, {id: 3, title: 'гандн'}]

export const tovarsRouter = Router({})


tovarsRouter.get('/', (req, res) => {
    res.send(tovars)
})
tovarsRouter.put('/:id', (req, res) => {
    let updateTitle = tovars.find(t => t.id === +req.params.id)
    if(updateTitle){
        updateTitle.title = req.body.title
        res.send(updateTitle)
    }else{
        res.send(404)
    }
})

tovarsRouter.post('/', (req, res) => {
    let NewTowar = {
        id: 10,
        title: req.body.title
    }
    tovars.push(NewTowar)
    res.status(200).send(NewTowar)
})
tovarsRouter.delete('/:id', (req, res) => {
    for(let i = 0; i<tovars.length; i++){
        if( tovars[i].id === +req.params.id){
            tovars.splice(i, 1)
            res.send(204)

            return
        }
    }
    res.send(404)
})