import './App.css';
import React, { useState } from 'react';
import C1Image from './Iconos/C1.png';
import C2Image from './Iconos/C2.png';

function App() {
  const [meta, setMeta] = useState('');
  const [metas, setMetas] = useState([]);
  const [contadorCompletas, setContadorCompletas] = useState(0);
  const [contadorPendientes, setContadorPendientes] = useState(0);

  const handleInputChange = (e) => {
    setMeta(e.target.value);
  };

  const agregarMeta = () => {
    setMetas([...metas, { texto: meta, completa: false, subrayada: false }]);
    setMeta('');
    setContadorPendientes((prevContador) => prevContador + 1);
  };

  const marcarCompleta = (index) => {
    const nuevasMetas = [...metas];
    const metaActual = nuevasMetas[index];

    if (!metaActual.completa) {
      setContadorCompletas((prevContador) => prevContador + 1);
      setContadorPendientes((prevContador) => prevContador - 1);
    }

    metaActual.completa = !metaActual.completa;
    setMetas(nuevasMetas);
  };

  const subrayarTexto = (index) => {
    const nuevasMetas = [...metas];
    const metaActual = nuevasMetas[index];

    if (!metaActual.subrayada) {
      setContadorCompletas((prevContador) => prevContador + 1);
      setContadorPendientes((prevContador) => prevContador - 1);
    }

    metaActual.subrayada = !metaActual.subrayada;
    setMetas(nuevasMetas);
  };

  const eliminarTexto = (index) => {
    const nuevasMetas = [...metas];
    const metaActual = nuevasMetas[index];

    if (!metaActual.completa) {
      setContadorPendientes((prevContador) => prevContador - 1);
    }

    if (metaActual.completa) {
      setContadorCompletas((prevContador) => prevContador - 1);
    }

    nuevasMetas.splice(index, 1);
    setMetas(nuevasMetas);
  };

  return (
    <div className="App">
      <main>
        <h1>Mis Metas</h1>
        <div>
          <input type="text" placeholder="Nueva meta..." value={meta} onChange={handleInputChange} />
          <button onClick={agregarMeta}>Agregar</button>
        </div>
        <div className='contenedores'>
          <p className='p1'>Completas: {contadorCompletas}</p>
          <p className='p2'>Pendiente: {contadorPendientes}</p>
          </div>
          {metas.map((m, index) => (
            <p key={index} className={`${m.completa ? 'completa' : ''} ${m.subrayada ? 'subrayada' : ''}`}>
              {m.texto}
              <img src={C2Image} alt='Icono 1' id='' onClick={() => eliminarTexto(index)} />
              <img src={C1Image} alt='Icono 2' id='' onClick={() => subrayarTexto(index)} className={m.subrayada ? 'subrayar' : ''}/>
              {m.subrayada && <span className="linea"></span>}
            </p>
          ))}
        
      </main>
    </div>
  );
}

export default App;
