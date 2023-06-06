const address = [{id: 1, value: "Moskov"}, {id: 2,value: 'Vladivostok'}]

export const addressRepositiry = {
    createNewAddress(value: string){
        let newPostAddress = {
            id: 10,
            value: value
        }
        address.push(newPostAddress)
        return address
    },
    getAdresses(){
        return address
    },
    updateAdress(id: number, value: string){
        let addressUpdate = address.find(p => p.id === id)
        if(addressUpdate){
            addressUpdate.value = value
            return addressUpdate
        }else{
            return 404
        }
    },
    searchAdressById(id: number){
        let elementAddressId = address.find( a => a.id === id)
        if(elementAddressId){
            return elementAddressId
        }else{
            return 404
        }
    },
    deleteAdress(id: number){
        for(let i=0; i < address.length; i++){
            if(address[i].id === id){
                address.splice(i, 1)
                return 204
            }else{
                return 404
            }
        }
    }
}