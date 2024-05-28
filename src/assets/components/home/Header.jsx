import React from 'react';
import header from '../../images/header.jpg';

export const Header = () => {
    return (
        <div className="bg-header" style={{ backgroundImage: `url(${header})` }}>
            <h1 className="header-text m-5 link-font">Siempre contigo, escuchanos donde quieras y como quieras</h1>
        </div>
    );
}