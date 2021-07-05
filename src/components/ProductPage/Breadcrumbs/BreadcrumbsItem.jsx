import React from 'react';

export function BreadcrumbsItem({current, idx, arr}){
    
    const {link, name} = current;

        if(arr.length - 1 === idx) {
                return (
                        <li className="breadcrumbs__item breadcrumbs__item--active">
                                <span className="breadcrumbs__link">{name}</span>
                        </li>
                );
        }

        return(
        <>
        <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href={link}>{name}</a> 
        </li>
        <li className="breadcrumbs__item  breadcrumbs__separator">/</li>
        </>
        
        );
}