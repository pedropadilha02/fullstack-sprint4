import { getData } from './HttpService';

export async function getFilters() {
    
    try{
    
        const data = await getData('products.json'); //products.json
        
        if(typeof data === 'string'){
            throw new Error(data)
        }

        return data.filters;

    } catch (err) {
        return ("Erro ao carregar os filtros");
    }
    
}