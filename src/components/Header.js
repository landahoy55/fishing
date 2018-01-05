import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// <NavLink to="/edit" activeClassName="btn btn-success"><button type="button" className="btn btn-primary">Edit</button></NavLink>
//<NavLink to="/session" activeClassName="btn btn-success"><button type="button" className="btn btn-primary">Start Session</button></NavLink>
const Header = () => (
    <header>
        <h1>Gone Fishing</h1>
        <NavLink to="/" exact={true}><button className="btn btn-primary" type="button">Home</button></NavLink>
        <NavLink to="/location"><button type="button">Start Session</button></NavLink>
        <NavLink to="/live"><button type="button">Live Sessions</button></NavLink>
    </header>
);

export default Header;