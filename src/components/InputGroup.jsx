import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';


const InputGroup = ({
    name,
    error,
    value,
    placeholder,
    type,
    onChange
}) => {    
    return (
        <div>
        <input 
            type={type}
            name={name} 
            className={classnames('valid', {'invalid': error})}
            placeholder={placeholder}
            value={value}
            onChange={onChange} 
        />
        {error && <div>{error}</div>}
        </div>
    )
}

InputGroup.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}

InputGroup.defaultProps = {
    type: 'text'
}

export default InputGroup
