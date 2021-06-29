import { getData } from './HttpService';

export async function getBreadcrumbs() {
    const data = await getData("categories.json");
    return data.current;
}