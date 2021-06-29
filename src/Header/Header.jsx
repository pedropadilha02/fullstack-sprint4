import React, { Component } from 'react';
import { MenuSwitch } from './MenuSwitch'
import { SearchBar } from './SearchBar'
import { Menu } from './Menu'

export function Header() {
    return (
    <header class="header">
        <div class="header__container">
        <MenuSwitch/>
        <SearchBar/>
        <Menu/>
        </div>
    </header>
    );
}

