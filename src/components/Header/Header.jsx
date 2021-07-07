import React from 'react';
import { MenuSwitch } from './MenuSwitch'
import { SearchBar } from './SearchBar'
import { Menu } from './Menu'
import { Topbar } from './Topbar';



export function Header() {
    return (
    <header className="header">
        <Topbar/>
        <div className="header__container">
        <MenuSwitch/>
        <SearchBar/>
        <Menu/>
        </div>
    </header>
    );
}

