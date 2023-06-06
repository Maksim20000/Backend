const products= [{id: 1, title: 'tomato'}, {id:2, title: 'potato'}, {id: 3, title: 'lalla'}]

export const productsRepositiry = {
    // find query title
    findProducts(title: string | null){
        if(title){
            let filteredProducts = products.filter( p => p.title.indexOf(title) > -1)
            return filteredProducts
        }else{
            return products
        }
    },
    getProductById(id: number){
        let elementProduct = products.find( p => p.id === id)
        return elementProduct
    },
    createProduct(title: string){
        const newProduct = {
            id: 5,
            title: title
        }
        products.push(newProduct)
        return newProduct
    },
    updateProducts(id: number, title: string){
        let product = products.find(p => p.id === id)

        if(product){
            product.title = title
            return true
        }else{
            return false
        }
    },
    deleteProduct(id: number){
        for(let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1)
                return true
            }
        }
        return false
    }
}