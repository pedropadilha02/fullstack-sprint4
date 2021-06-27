import React, { Component } from 'react';
import Menu from './Menu'


function Header() {

        return ( 
            <header class="header">
                <div class="header__container">
                    <div class="header__mobile">
                    <div class="header__drawer menu header__drawer--active">
                        <img class="menu__img" src="assets/menu.svg"/>
                        <p class="menu__title">menu</p>
                    </div>
                    <div class="header__drawer close">
                        <img src="assets/close.svg"/>
                        <p class="close__title">fechar</p>
                    </div>
                    <h1 class="header__logo">
                        <img class="header__img" src="assets/rchlo.svg" alt="Logo" />
                    </h1>
                    </div>
                    <div class="header__desktop">
                    <h1 class="header__logo">
                        <img class="header__img" src="assets/riachuelo.svg" alt="Logo" />
                    </h1>
                    </div>
                    <div class="header__search">
                    <img class="header__icon" src="assets/search.svg"/>
                    <input class="header__input" type="search" placeholder="O que você está procurando?"
                        oninput="produtoController.filtra(event)" />
                    </div>

                    <Menu/>
                </div>
            </header>
         );

}
 
export default Header;