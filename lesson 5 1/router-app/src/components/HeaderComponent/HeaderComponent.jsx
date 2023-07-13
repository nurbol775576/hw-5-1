import React from 'react';
import { Link } from 'react-router-dom';
import css from './header.module.css';

const HeaderComponent = () => {
    return (
    <header className={css.header}>
            <h1>
                <Link to="/">Here is logo</Link>
            </h1>
            <ul className={css.navbar}>
              <li>
              <Link to="/home">Home</Link>
              </li>
              <li>
              <Link to="/about">About us</Link>
              </li>
              <li>
               <Link to="/contact">Contact</Link>
              </li>
              <li>
               <Link to="/news">News</Link>
              </li>
              <li>
               <Link to="/services">services</Link>
              </li>
            </ul>
    </header>
    );
}
export default HeaderComponent;























