import { getData } from './HttpService';

export async function getProducts() {
    const data = await getData("products.json");
    return data.products;
}