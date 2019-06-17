import React from 'react';
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

TextareaGroup.defaultProps = {
    type: 'text'
}

export default TextareaGroup 
