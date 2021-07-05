import { useRef } from 'react';
import { useSearch } from '../../context/SearchContext'

export function SearchBar(){
    const { setSearchText } = useSearch();
    const countRef = useRef();
    
    function searchProducts(event) {
        clearTimeout(countRef.current);
        countRef.current = setTimeout(() => {
            setSearchText(event.target.value);
        }, 1500);
    }
    
    return (
        <div className="header__search">
            <img className="header__icon" src="assets/search.svg"/>
            <input className="header__input" type="search" placeholder="O que você está procurando?" onChange={(e) => searchProducts(e)} />
        </div>
    );
}

