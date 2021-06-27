import React, { Component } from 'react';

function BreadcrumbItem () {
    return (
        <>
        <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="">Home</a>
        </li>
        <li class="breadcrumbs__item  breadcrumbs__separator">/</li>
        <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="">Infantil</a>
        </li>
        <li class="breadcrumbs__item breadcrumbs__separator">/</li>
        <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="">Personagens</a>
        </li>
        <li class="breadcrumbs__item breadcrumbs__separator">/</li>
        <li class="breadcrumbs__item breadcrumbs__item--active">
        <span class="breadcrumbs__link">Mario Bros</span>
        </li>
        </>
    );
}

export default BreadcrumbItem;