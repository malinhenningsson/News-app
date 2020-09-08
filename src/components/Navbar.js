import React from 'react';
import { Link } from 'react-router-dom';

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
                </ul>
            </nav>
        )
    }
}

export default Navbar;