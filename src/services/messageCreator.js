import { getFilters } from "./FiltersService";


export function messageCreator(){

    const reqF = await getFilters();
    console.log(reqF);
      
}