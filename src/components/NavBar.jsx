import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/" style={{margin: '1rem', padding: '.5rem'}} data-testid="main-link">Main</Link>
            <Link to="/about" style={{margin: '1rem', padding: '.5rem'}} data-testid="about-link">About</Link>
            <Link to="/users" style={{margin: '1rem', padding: '.5rem'}} data-testid="about-users">Users</Link>
            <Link to="/counter" style={{margin: '1rem', padding: '.5rem'}} data-testid="counters">Counters</Link>
            <Link to="/hello" style={{margin: '1rem', padding: '.5rem'}} data-testid="hello">Hello</Link>
        </div>
    );
};

export default NavBar;