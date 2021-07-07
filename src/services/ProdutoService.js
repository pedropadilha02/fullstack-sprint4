import { getData } from './HttpService';

export async function getProducts() {
    try{
    
        const data = await getData('products.json'); //products.json
        
        if(typeof data === 'string'){
            throw new Error(data)
        }

        return data.products;

    } catch (err) {
        return ("Erro ao carregar os produtos");
    }
}