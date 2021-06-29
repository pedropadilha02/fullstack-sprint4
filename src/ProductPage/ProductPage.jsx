import React from 'react';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs'
import { Filter } from './Filter/Filter'
import { Products } from './Products'

export function ProductPage(){
    return(
    <>
    <main class="main">
      <Breadcrumbs/>
      <Filter/>
      <Products/>     
    </main>
    </>
    );
}

