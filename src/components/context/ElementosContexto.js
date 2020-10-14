import axios from '../axios/axios';
import crearContextoDatos from './crearContextoDatos';
import { GET_TAREAS, ADD_TAREAS, DELETE_TAREAS } from '../acciones/accionesNombres';

const reducerSignIn = (state = null, action) => {
  switch (action.type) {
    case GET_TAREAS:
      return { listadoElementos: action.payload };
    case ADD_TAREAS:
      const listadoElementos = [...state.listadoElementos, action.payload];
      axios.post('/tareas', {
        tareas: listadoElementos
      });
      return { listadoElementos };
    case DELETE_TAREAS:
      const nuevoListado = state.listadoElementos.filter(tarea => tarea !== action.payload);
      axios.post('/tareas', {
        tareas: listadoElementos
      });
      return { listadoElementos: nuevoListado };
    default:
      return state;
  }
};

// Que un usuario entre con sus credenciales
const getTareas = dispatch => {
  return async () => {
    const response = await axios.get('/tareas');
    dispatch({ type: GET_TAREAS, payload: response.data });
  };
};

const addTarea = dispatch => {
  return async tarea => {
    dispatch({ type: ADD_TAREAS, payload: tarea });
  };
};

const updateElementos = dispatch => {
  return async lista => {
    dispatch({ type: GET_TAREAS, payload: lista });
    await axios.post('/tareas', {
      tareas: lista
    });
  };
};

const deleteElemento = dispatch => {
  return async elemento => {
    dispatch({ type: DELETE_TAREAS, payload: elemento });
  };
};

export const { Contexto, Proveedor } = crearContextoDatos(
  reducerSignIn,
  {
    getTareas, addTarea, updateElementos, deleteElemento
  },
  {
    listadoElementos: []
  }
);