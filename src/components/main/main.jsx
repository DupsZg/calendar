import React from 'react'

import './main.css';

export const Main = (props) => {
    return (
        <main className = "app-main">
            {props.children}
        </main>
    )
}