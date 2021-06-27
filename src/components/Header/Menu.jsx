import React, { Component } from 'react';
import MenuItem from './MenuItem'

function Menu() {

        return ( 
            <nav class="header__menu menu">
          <ul class="menu__list">
            <MenuItem/>
          </ul>
        </nav>
         );
}
 
export default Menu;