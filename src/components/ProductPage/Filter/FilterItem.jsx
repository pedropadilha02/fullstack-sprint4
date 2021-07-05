import React, { Component } from 'react';

export function FilterItem({filter}){
    const {link, label} = filter;    
        return(
            <>
            <li className="filters__item">
            <span className="filters__label">{label}</span>
            <img className="filters__img" src="/assets/filter.svg" />
            </li>
            </>
        );
}

