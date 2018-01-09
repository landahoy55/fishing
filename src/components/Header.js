import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// <NavLink to="/edit" activeClassName="btn btn-success"><button type="button" className="btn btn-primary">Edit</button></NavLink>
//<NavLink to="/session" activeClassName="btn btn-success"><button type="button" className="btn btn-primary">Start Session</button></NavLink>
const Header = () => (
    <header>
            <div className="conatiner"> 
                <div className="row">
                    <h1>Gone Fishing - Hello!!</h1>
                </div>
                
                <div className="row">
                    <NavLink to="/" exact={true}><button className="btn headerButtons" type="button">Home</button></NavLink>
                    <NavLink to="/location"><button className="btn headerButtons" type="button">Start Session</button></NavLink>
                    <NavLink to="/live"><button className="btn headerButtons" type="button">Live Updates</button></NavLink>
                </div>
            </div>
    </header>
);

export default Header;