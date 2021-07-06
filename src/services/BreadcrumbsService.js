import { getData } from './HttpService';

export async function getBreadcrumbs() {
    try{
    
        const data = await getData('categories.json');
        
        if(typeof data === 'string'){
            throw new Error(data)
        }

        return data.current;

    } catch (err) {
        return (err.message);
    }
    
}