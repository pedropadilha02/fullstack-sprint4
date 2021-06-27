import React, { Component } from 'react';
import FilterItem from './FilterItem';

function Filters() {
    return(
        <section class="main__filters filters">
                <ul class="filters__list">
                    <FilterItem/>
                </ul>
        </section>
    );
}

export default Filters;