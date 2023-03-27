import React from 'react';
import "./Menu.scss"

const BurMenu = ({menu, setMenu}) => {
    return (

        <div className="menu" style={{
            display: menu ? "block" : "none"
        }}>
            <div className="menu--nav">
                <a onClick={() => setMenu(false)} href="#modern">interior</a>
                <a onClick={() => setMenu(false)} href="#about">About Us</a>
                <a onClick={() => setMenu(false)} href="#mainMenu">Menu</a>
                <a onClick={() => setMenu(false)} href="#contacts">Contacts</a>
                <div>
                    <span>EN</span>
                    <span>RU</span>
                    <span>KG</span>
                </div>
            </div>
        </div>
    );
};

export default BurMenu;