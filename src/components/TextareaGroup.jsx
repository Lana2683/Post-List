import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextareaGroup = ({
    name,
    error,
    value,
    placeholder,
    type,
    onChange
}) => {    
    return (
        <div>
        <textarea 
            type={type}
            name={name} 
            className={classnames('valid inp-group', {'invalid inp-group': error})}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {error && <div>{error}</div>}
        </div>
    )
}

// TextareaGroup.propTypes = {
    // title: PropTypes.string.isRequired,
    // body: PropTypes.string.isRequired,
    // placeholder: PropTypes.string.isRequired,
    // value: PropTypes.string.isRequired,
    // type: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
    // error: PropTypes.string.isRequired
// }

TextareaGroup.defaultProps = {
    type: 'text'
}

export default TextareaGroup 
