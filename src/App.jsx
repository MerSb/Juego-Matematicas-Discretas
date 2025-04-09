import { useState } from 'react';
import Libro from './components/Libro';
import fondo1 from './assets/habitacion.png';
import fondo2 from './assets/habitacion2.png';
import fondo3 from './assets/habitacion3.png';
import './App.css';

const fondos = [fondo1, fondo2, fondo3];

const respuestas = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6']; // Aca colocamos las respuestas reales

function App() {
  const [nivel, setNivel] = useState(0);
  const [libroAbierto, setLibroAbierto] = useState(false);
  const [respuesta, setRespuesta] = useState('');
  const [ganado, setGanado] = useState(false);

  const verificarRespuesta = () => {
    if (respuesta.trim().toLowerCase() === respuestas[nivel]) {
      const siguiente = nivel + 1;
      if (siguiente < respuestas.length) {
        setNivel(siguiente);
        setRespuesta('');
        setLibroAbierto(false);
      } else {
        setGanado(true);
      }
    } else {
      alert('Respuesta incorrecta, intenta de nuevo.');
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${fondos[nivel % fondos.length]})`,
      }}
    >
      {ganado ? (
        <div className="text-white text-4xl font-bold">¡Felicidades pudiste resolver todos los acertijos! Ganaste el juego</div>
      ) : (
        <Libro
          nivel={nivel}
          abierto={libroAbierto}
          setAbierto={setLibroAbierto}
          respuesta={respuesta}
          setRespuesta={setRespuesta}
          verificar={verificarRespuesta}
        />
      )}
    </div>
  );
}

export default App;

