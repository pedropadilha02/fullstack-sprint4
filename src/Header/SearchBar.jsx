import React, { Component } from 'react';

export function SearchBar(){
    return (
        <div className="header__search">
            <img className="header__icon" src="assets/search.svg"/>
            <input className="header__input" type="search" placeholder="O que você está procurando?" oninput="produtoController.filtra(event)" />
        </div>
    );
}

