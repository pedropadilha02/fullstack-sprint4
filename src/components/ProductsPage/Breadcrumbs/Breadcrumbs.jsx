import React, { Component } from 'react';
import BreadcrumbItem from './BreadcrumbItem'


function Breadcrumbs () {
    return (
        <section class="main__breadcrumbs breadcrumbs">
                <nav>
                    <ol class="breadcrumbs__list">
                        <BreadcrumbItem/>
                    </ol>
                </nav>
        </section>
    );
}

export default Breadcrumbs;