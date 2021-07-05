import { useEffect, useState } from "react";
import { getProducts } from '../../../services/ProdutoService'
import { Product } from './Product'
import { useSearch } from "../../../context/SearchContext"

export function Products() {
    
    const [data, setData] = useState();
    const [display, setDisplay] = useState();
    const { searchText } = useSearch();
    
    async function fetchData() {
        const req = await getProducts();
        setData(req);
    }
    
    useEffect(() => {
        fetchData();
    }, []);
   
    useEffect(() => {
        if (data) filterBySearch(searchText);
    }, [data, searchText]);

    function filterBySearch(text) {
        if (!text) setDisplay(data);

        const filtered = data.filter((product) => 
        product.name.toLowerCase().includes(text.toLowerCase())
        );
        setDisplay(filtered);
    }


    return (
    <section className="main__products">
        <ul>
            {display && display.map((product) => (
                <Product key={product.sku} product={product} />
            ))}
        </ul>        
    </section>
    );
}

