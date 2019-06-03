import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const {heading} = props;
    return (
        <header>
            <h1>{heading}</h1>
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
