import React from 'react';

import logo from '../../resources/images/logo.svg';
import user from '../../resources/images/user.svg';

import style from './header.module.css';

const Header = () => (
    <header className={style.header}>
        <img className={style.logo} src={logo} alt=""/>
        <h1 className={style.title}>Kalendar</h1>
        <span className={style.version}>v0.2</span>
        <img className={style.user} src={user} alt=""/>
    </header>
);

export default Header;
