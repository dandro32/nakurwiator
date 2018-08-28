import React from 'react';
import PropTypes from 'prop-types';

const InputText = (props) => {
  return(
    <div className="form-group">
      <label>{props.label}</label>
      <input 
        className="form-control" 
        type='text' 
        name={props.name}
        value={props.value} 
        required={props.required} 
        onChange={props.onChange}
      />)
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default InputText;