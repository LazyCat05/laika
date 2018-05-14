import React from 'react';

const NameField = (props) => {
  return(
    <label> {props.label}:
      <input
        onChange={props.handleInput}
        type='text-field'
        size='40'
      />
    </label>
  )
}

export default NameField;
