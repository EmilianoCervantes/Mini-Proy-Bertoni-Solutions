import React, { useState } from 'react';
import Input from '../modules/Input';

const Elemento = ({ nombre, handleEdicion, id, deleteElemento }) => {
  const [tarea, setTarea] = useState(nombre);
  const [editando, setEditando] = useState(false);

  return (
    <div className="row tarea">
      <div className="col-12">
        <Input id={`tarea${id}`}
          value={tarea}
          onChange={setTarea}
          disabled={!editando}
        />
        <button className="parte-tarea float-right btn btn-danger"
          onClick={() => {
            deleteElemento(nombre);
          }}
        >Borrar</button>
        {
          editando ?
            <button className="parte-tarea float-right btn btn-secondary"
              onClick={() => {
                handleEdicion(nombre, tarea);
                setEditando(false);
              }}
            >Finalizar edición</button>
            :
            <button className="parte-tarea float-right btn btn-secondary"
              onClick={() => {
                setEditando(true);
              }}
            >Editar</button>
        }
      </div>
    </div>
  );
};

export default Elemento;