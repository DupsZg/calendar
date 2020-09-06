import React from 'react';

import logo from '../../resources/images/logo.svg';

import style from './header.module.css';

const Header = () => (
    <header className={style.header}>
        <img className={style.logo} src={logo} alt=""/>
        <h1 className={style.title}>Kalendar</h1>
        <span className={style.version}>v0.1</span>
    </header>
);

export default Header;
