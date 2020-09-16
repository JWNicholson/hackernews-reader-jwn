import React from 'react';
import { Route, Link } from 'react-router-dom';
import {NavBar} from '../../styles/NavbarStyles';
import { ImHome } from 'react-icons/im';

const Navbar = () => {
    return (
        <header>
            <NavBar>
            <h1>Hacker News Reader</h1>
            <nav>
                <ul className="navbar" >
                    <li><Link to ="/"><ImHome color="#f5f5f5" /></Link></li>
                    <li><Link to="/topcomments" >Top Comments</Link></li>
                </ul>  
            </nav>
            </NavBar>
        </header>
    )
}

export default Navbar;
