import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';


const AddInputGroup = ({
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

AddInputGroup.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}

AddInputGroup.defaultProps = {
    type: 'text'
}

export default AddInputGroup
