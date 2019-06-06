import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <header>
            <nav>
            <a href="/" className="brand">Post List</a>
            <ul>
                <li className="item">
                    <Link to='/add-post' className="link">
                        <i className="fas fa-plus"/>
                    </Link>
                </li>
                <li className="item">
                    <button className="link">
                        <i className="far fa-thumbs-up" />
                    </button>
                </li>
                <li className="item">
                    <button className="link">
                        <i className="far fa-thumbs-down" />
                    </button>
                </li>
                <li className="item"> 
                    <button className="link">
                        <i className="fas fa-sort-alpha-down" />
                    </button>
                </li>
              
            </ul>
            </nav>
        </header>
    )
}

export default Header;
