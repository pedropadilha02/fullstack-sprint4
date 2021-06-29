import { getData } from './HttpService';

export async function getFilters() {
    const data = await getData("products.json");
    return data.filters;
}