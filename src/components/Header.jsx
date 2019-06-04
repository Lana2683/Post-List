import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const {heading} = props;
    return (
        <header>
            <nav>
            <a href="/" className="brand">{heading}</a>
            <ul>
                <li className="item">
                    <button className="link">
                        <i className="fas fa-plus"/>
                    </button>
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

Header.defaultProps = {
    heading: 'My App' 
}

Header.propTypes = {
    heading: PropTypes.string.isRequired
}

export default Header;
