import React, { useContext, useEffect, useState } from 'react';
import { Contexto as ElementosContexto } from '../context/ElementosContexto';
import Input from '../modules/Input';
import Elemento from './Elemento';

const ListaElementos = () => {
  const { state: { listadoElementos }, getTareas, addTarea, updateElementos, deleteElemento } = useContext(ElementosContexto);
  const [nuevaTarea, setNuevaTarea] = useState('');

  useEffect(() => {
    getTareas();
    // eslint-disable-next-line
  }, []);

  /**
   * Manejar o sólo eliminar las tareas
   * @param {string} original - Tarea original antes de edición
   * @param {string} nueva - Tarea después de edición
   */
  const handleEdicion = (original, nueva) => {
    const nuevaLista = listadoElementos.filter(tarea => tarea !== original);

    updateElementos([...nuevaLista, nueva]);
  };

  if (listadoElementos.length === 0) {
    return (
      <div className="text-center">
        <h3>No hay tareas</h3>
        <div className="mt-3">
          <Input id="NuevaTarea" value={nuevaTarea} onChange={setNuevaTarea} />
          <button className="btn btn-primary mt-2"
            onClick={() => {
              addTarea(nuevaTarea);
              setNuevaTarea('');
            }}
            disabled={!nuevaTarea || listadoElementos.includes(nuevaTarea)}
          >Agregar nueva tarea</button>
        </div>
      </div>
    );
  }

  console.log('listadoElementos');
  console.log(listadoElementos);

  return (
    <div className="text-center">
      {
        listadoElementos.map((tarea, i) => {
          return <Elemento key={i}
            nombre={tarea} id={i} handleEdicion={handleEdicion} deleteElemento={deleteElemento}
          />
        })
      }

      <div className="mt-3">
        <Input id="NuevaTarea" value={nuevaTarea} onChange={setNuevaTarea} />
        <button className="btn btn-primary mt-2"
          onClick={() => {
            addTarea(nuevaTarea);
            setNuevaTarea('');
          }}
          disabled={!nuevaTarea || listadoElementos.includes(nuevaTarea)}
        >Agregar nueva tarea</button>
      </div>
    </div>
  );
};

export default ListaElementos;