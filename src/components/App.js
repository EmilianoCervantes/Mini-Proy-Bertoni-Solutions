import React from 'react';
import Container from './modules/Container';
import './App.css';
import ListaElementos from './screens/ListaElementos';

const App = () => {
  return (
    <Container>
      <div className="row">
        <div className="col text-center">
          <h2>Aquí están tus tareas</h2>
        </div>
      </div>
      <ListaElementos />
    </Container>
  );
};

export default App;