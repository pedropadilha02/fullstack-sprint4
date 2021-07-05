import React, { Component } from 'react';

export function MenuSwitch(){
    return (
    <>
    <div className="header__mobile">
        <div className="header__drawer menu header__drawer--active">
        <img className="menu__img" src="assets/menu.svg"/>
        <p className="menu__title">menu</p>
        </div>
        <div className="header__drawer close">
        <img src="assets/close.svg"/>
        <p className="close__title">fechar</p>
        </div>
        <h1 className="header__logo">
        <img className="header__img" src="assets/rchlo.svg" alt="Logo" />
        </h1>
    </div>
    <div className="header__desktop">
        <h1 className="header__logo">
        <img className="header__img" src="assets/riachuelo.svg" alt="Logo" />
        </h1>
    </div>
    </>
    );
}

