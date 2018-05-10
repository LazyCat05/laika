import React from 'react';

const PlanetSelectField = (props) => {
  return(
    <label>{props.label}
      <select
        name={props.name}
        content={props.selection}
        onChange={props.handleInput}>
        <option value=""></option>
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option>
      </select>
    </label>
  )
}

export default PlanetSelectField;
