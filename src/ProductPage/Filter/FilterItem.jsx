import React, { Component } from 'react';

export function FilterItem({filter}){
    const {link, label} = filter;    
        return(
            <>
            <li class="filters__item">
            <span class="filters__label">{label}</span>
            <img class="filters__img" src="/assets/filter.svg" />
            </li>
            </>
        );
}

