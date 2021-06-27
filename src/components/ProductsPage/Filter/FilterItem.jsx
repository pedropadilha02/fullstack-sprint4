import React, { Component } from 'react';

function FilterItem () {
    return (
        <>
        <li class="filters__item">
                    <span class="filters__label">Tamanho</span>
                    <img class="filters__img" src="assets/filter.svg" />
                </li>
                <li class="filters__item">
                    <span class="filters__label">Cor</span>
                    <img class="filters__img" src="assets/filter.svg" />
                </li>
                <li class="filters__item">
                    <span class="filters__label">Departamento</span>
                    <img class="filters__img" src="assets/filter.svg" />
                </li>
                <li class="filters__item">
                    <span class="filters__label">Categoria</span>
                    <img class="filters__img" src="assets/filter.svg" />
                </li>
                <li class="filters__item">
                    <span class="filters__label">Manga</span>
                    <img class="filters__img" src="assets/filter.svg" />
        </li>
        </>
    );
}

export default FilterItem;