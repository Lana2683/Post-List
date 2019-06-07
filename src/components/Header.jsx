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
                        <i className="fas fa-plus" />
                        <span className="tooltiptext">Add New Post</span>
                    </Link>
                </li>
                <li className="item">
                    <a href='/' className="link tooltip">
                        <i className="far fa-thumbs-up" />
                        <span className="tooltiptext">sort by likes</span>
                    </a>
                </li>
                <li className="item">
                    <a href='/'  className="link tooltip">
                        <i className="far fa-thumbs-down" />
                        <span className="tooltiptext">sort by dislikes</span>
                    </a>
                </li>
                <li className="item"> 
                    <a href='/' className="link tooltip">
                        <i className="fas fa-sort-alpha-down" />
                        <span className="tooltiptext">sort alphabetically</span>
                    </a>
                </li>
              
            </ul>
            </nav>
        </header>
    )
}

export default Header;
