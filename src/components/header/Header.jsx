import React from 'react'
import Nav from './Nav';

//Stateless Components
const Header = () => (
        <header >
                <div>
                        <Nav  href="/">Home</Nav>
                        <Nav  href="/profile">Company</Nav>
                        <Nav  href="/profile/Roni">Roni</Nav>
                </div>
        </header>
);

export default Header;