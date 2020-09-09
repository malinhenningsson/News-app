import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <h1>News</h1>
                </Link>
                <ul className="navbar-list">
                    <Link to="/">
                        <li className="navbar-items">Top headlines</li>
                    </Link>
                    <Link to="/search">
                        <li className="navbar-items">Search</li>
                    </Link>
                    <div className="dropdown">
                        <button className="dropbtn">Categories
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <NavLink to="/category/economy">Economy</NavLink>
                            <NavLink to="/category/politics">Politics</NavLink>
                            <NavLink to="/category/sport">Sport</NavLink>
                            <NavLink to="/category/entertainment">Entertainment</NavLink>
                            <NavLink to="/category/tech">Tech</NavLink>
                        </div>
                    </div>
                </ul>
            </nav>
        )
    }
}

export default Navbar;