import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import Filters from './Filter/Filters'
import Product from './Product'

function ProductPage () {
    return (
        <main class="main">
            <Breadcrumbs/>

            <Filters/>

            <Product/>
        </main>
    );
}

export default ProductPage;