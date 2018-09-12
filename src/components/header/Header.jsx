/**
 * React header Component
 * React emotion Css in Js
 */
import React from 'react'
import { Nav, li, search , input} from './Nav';

export const Input = () => {
        return (
                <input className={search, input} type={"text"} placeholder={'Search'}></input>
        )
      }

//Stateless Components
const Header = ({ type }) => (
        <header >
                        <Nav className={Nav} >
                        <li className={li} href="/">Home</li>
                        <li className={li} href="/profile">Company</li>
                        <li class={li}><Input className={search} /></li>
                        <li className={li} href="/profile/logout">Logout</li>
                        </Nav>
        </header>
                );

export default Header;