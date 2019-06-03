import React from 'react';

const Header = (props) => {
    const {heading} = props;
    return (
        <div>
            <h1>{heading}</h1>
        </div>
    )
}

export default Header;
