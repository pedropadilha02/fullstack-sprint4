import { useEffect, useState } from 'react';
import { getFilters } from '../../../services/FiltersService'
import { FilterItem }from './FilterItem'

export function Filter(){
  
  const [data, setData] = useState();

  async function fetchData() {
    const req = await getFilters();
    setData(req);
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return(
    <section className="main__filters filters">
        <ul className="filters__list">
          { data && data.map((filter) => (
              <FilterItem key={filter.id} filter={filter}/>
            ))
          }
        </ul>
    </section>
    );
}

