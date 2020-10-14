import React from 'react';
import './header.scss';
import {Link, link , Navlink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>React Demo!!!</h1>
            <ul id='headernavList'>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/history">history</Link>
                </li>
                <li>
                    <Link to="/help">help</Link>
                </li>
            </ul>
        </header>
    )
};
export default Header;
