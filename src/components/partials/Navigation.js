import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (

        <ul className="nav">
            <li className="nav-item">
                <NavLink exact to="/"
                         className="nav-item-target"
                         activeClassName="is-active">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/resume"
                         className="nav-item-target"
                         activeClassName="is-active">
                    Resume
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/portfolio"
                         className="nav-item-target"
                         activeClassName="is-active">
                    Portfolio
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact"
                         className="nav-item-target"
                         activeClassName="is-active">
                    Contact
                </NavLink>
            </li>
        </ul>

    );

}

export default Navigation
