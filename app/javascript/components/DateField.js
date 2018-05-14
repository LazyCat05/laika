import React from 'react';

const DateField = (props) => {
  return (
    <label> {props.label}
      <input
        name={props.name}
        type='date'
        value={props.date}
        onChange={props.handleInput} />
    </label>
  )
}

export default DateField;
