import React from 'react';

const Input = props => {
  return (
    <div className="form-label-group">
      <label htmlFor={props.id}>Ingresa tu tarea</label>
      <input type="text" className="form-control parte-tarea float-left"
        {...props}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        placeholder="Ingresa tu tarea"
      />
    </div>
  );
};

export default Input;