import { getData } from './HttpService';

export async function getCategories() {
    
    try{
    
        const data = await getData('categories.json');
        
        if(typeof data === 'string'){
            throw new Error(data)
        }

        return data.all;

    } catch (err) {
        return (err.message);
    }
    
}