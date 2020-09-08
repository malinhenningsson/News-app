import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <h1>News</h1>
                <ul class="navbar-list">
                    <li class="navbar-items">Home</li>
                    <li class="navbar-items">Genres</li>
                    <li class="navbar-items">Search</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;