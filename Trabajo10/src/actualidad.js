import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const ActualidaddeRobert = 'La Actualidad de Robert Metcalfe';
  const Actualidad = 'Actualmente Robert Metcalfe regreso y sigue trabajando en MIT en el Laboratorio de computacion e inteligencia artificial como un investigador asociado e ingeniero de computadoras, junto con el laboratorio MIT Julia';

  return (
    <div>
      <Actualidad title={ActualidaddeRobert} description={Actualidad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));