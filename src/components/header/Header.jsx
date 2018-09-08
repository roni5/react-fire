import React from 'react'
import { Nav, li, search } from './Nav';

export const Input = () => {
        return (
                <input style={{background: '#C7CECE'}} type={"text"} placeholder={'Search'}></input>
        )
      }

//Stateless Components
const Header = ({ type }) => (
        <header >
                        <Nav className={Nav} >
                        <li className={li} href="/">Home</li>
                        <li className={li} href="/profile">Company</li>
                        <li class={li}><Input class={search} /></li>
                        <li className={li} href="/profile/logout">Logout</li>
                        </Nav>
        </header>
                );

export default Header;