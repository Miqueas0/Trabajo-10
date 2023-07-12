import React from 'react';
import ReactDOM from 'react-dom';
import Historia from './historia.js';

const App = () => {
  const VidadeRobert = 'La Historia, Estudios, Vida, Años y Trabajo de Robert Metcalfe';
  const Historia = 'Robert "Bob" Metcalfe nació en Brooklyn, Nueva York, el 7 de abril de 1946. Es un ingeniero eléctrico de los EE. UU., coinventor de Ethernet, fundador de 3Com, enunció la Ley de Metcalfe. Desde 2006 es miembro principal de la compañía de capital riesgo Polaris Venture Partners.'
  'Desde pequeño tuvo un ávido interés por la tecnología, que de grande lo llevó a desarrollar el estándar de red más popular del mundo, Ethernet. También fundó la empresa 3Com y formuló la Ley de Metcalfe. '
  'Metcalfe hizo sus estudios de grado en el Instituto Tecnológico de Massachusetts (MIT), donde se graduó en 1969 con los títulos de Bachiller en Ingeniería Eléctrica y de Administración de Negocios (este último por la Sloan School of Management del MIT). Sólo un año después, obtuvo la maestría en Matemáticas Aplicadas en la prestigiosa Universidad Harvard, para terminar sus estudios en 1973 doctorándose en Ciencias de la Computación con una tesis sobre conmutación de paquetes escrita mientras trabajaba en el Proyecto MAC del MIT';
  const Roberto1 = 'Roberto1';
  return (
    <div>
      <Historia title={VidadeRobert} description={Historia} />
      <img src={Roberto1} alt="Roberto1" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));