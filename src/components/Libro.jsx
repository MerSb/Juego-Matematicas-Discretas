import React from 'react';
import acertijo1 from '../assets/libro-acertijo-1.png';
import acertijo2 from '../assets/libro-acertijo-2.png';
import acertijo3 from '../assets/libro-acertijo-3.png';
// importa hasta el 6

const acertijos = [acertijo1, acertijo2, acertijo3]; // agrega hasta 6 imágenes

const Libro = ({ nivel, abierto, setAbierto, respuesta, setRespuesta, verificar }) => {
  return (
    <div>
      {!abierto ? (
        <img
          src={acertijos[nivel]}
          alt="Libro cerrado"
          className="w-[400px] cursor-pointer"
          onClick={() => setAbierto(true)}
        />
      ) : (
        <div className="relative">
          <img src={acertijos[nivel]} alt={`Libro nivel ${nivel + 1}`} className="w-[600px]" />
          <input
            type="text"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            placeholder="Escribe tu respuesta..."
            className="absolute right-[60px] bottom-[100px] w-[180px] px-2 py-1 rounded bg-white text-black text-sm shadow-md"
          />
          <button
            onClick={verificar}
            className="absolute right-[60px] bottom-[50px] bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default Libro;
