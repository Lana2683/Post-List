import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
            <a href="/" className="brand">Post List</a>
            <ul>
                <li className="item">
                    <Link to='/add-post' className="link tooltip">
                        <i className="fas fa-plus" />&nbsp;New Post
                        <span className="tooltiptext">Add New Post</span>
                    </Link>
                </li> 
            </ul>
            </nav>
        </header>
    )
}

export default Header;
