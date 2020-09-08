import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <h1>News</h1>
                <ul className="navbar-list">
                    <li className="navbar-items">Home</li>
                    <li className="navbar-items">Genres</li>
                    <li className="navbar-items">Search</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;