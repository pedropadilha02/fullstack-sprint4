import { useEffect, useState } from 'react';
import { MenuItem } from './MenuItem'
import { getCategories } from "../../services/CategoriesService";
import { useMessage } from '../../context/MessageContext';

export function Menu(){
    const [data, setData] = useState();
    const {setMessageView} = useMessage();

    async function fetchData() {
      const req = await getCategories();
        if(typeof req === 'string'){
          setMessageView(req)
        } else {setData(req)}
        
      
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