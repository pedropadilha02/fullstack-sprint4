import { useEffect, useState } from 'react';
import { BreadcrumbsItem } from './BreadcrumbsItem';
import { getBreadcrumbs } from '../../../services/BreadcrumbsService';


export function Breadcrumbs(){
  const [data, setData] = useState();
    
  async function fetchData()  {
    const req = await getBreadcrumbs();
    setData(req);
  }

  useEffect(() => {
    fetchData();
  }, []);

    return(
      <section className="main__breadcrumbs breadcrumbs">
          <nav>
            <ol className="breadcrumbs__list">
              { data && data.map((breadcrumb, idx, arr) => (
                <BreadcrumbsItem key={breadcrumb.id} current={breadcrumb} idx={idx} arr={arr} />
              ))
              }
            </ol>
          </nav>
      </section>
    );
}

