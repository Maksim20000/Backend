const tovars = [{id: 1, title: 'попа'}, {id: 2, title: 'сиси'}, {id: 3, title: 'гандн'}]

export const tovarsRepositiry = {
    getAllTovars(){
        return tovars
    },
    updateTitle(id: number, title: string){
        let updateTitle = tovars.find(t => t.id === id)
        if(updateTitle){
            updateTitle.title = title
            return updateTitle
        }else{
            return 404
        }
    },
    addNewTovar(title: string){
        let NewTowar = {
            id: 10,
            title: title
        }
        tovars.push(NewTowar)
        return NewTowar
    },
    deleteTovar(id: number){
        for(let i = 0; i<tovars.length; i++){
            if( tovars[i].id === id){
                tovars.splice(i, 1)
                return 404
            }else{
                return 404
            }
        }
    }
}