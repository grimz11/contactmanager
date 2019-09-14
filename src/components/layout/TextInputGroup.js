import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
   label,
   name,
   value,
   placeholder,
   type,
   onChange,
   error
 }) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })} 
        placeholder={placeholder} name={name} vale={value} onChange={onChange}/>
        {error && <div className="invalid-feedback">{error}</div>}
        
      </div>
    </React.Fragment>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}
TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;