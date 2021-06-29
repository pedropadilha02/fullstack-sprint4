import { useEffect, useState } from 'react';
import { MenuItem } from './MenuItem'
import { getCategories } from "../services/CategoriesService";


export function Menu(){
    const [data, setData] = useState();
  
    async function fetchData() {
      const req = await getCategories();
      setData(req);
    }

    useEffect(() => {
      fetchData();
    }, []);

    return(  
      <nav className="header__menu menu">
        <ul className="menu__list">
          { data && data.map(categorie => (
            <MenuItem key={`categories${categorie.id}`} categorie={categorie} />
          ))}
        </ul>
      </nav>
  );
}