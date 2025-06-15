import React from 'react';
import TarjetaPersona from './TarjetaPersona'; 
import './ListaTarjetas.css'; 

const ListaTarjetas = ({ personas }) => {
  if (!personas || personas.length === 0) {
    return <div className="lista-tarjetas-mensaje">No hay personas para mostrar.</div>;
  }

  return (
    <div className="lista-tarjetas-contenedor">
      <h2>Listado de Personas</h2>
      <div className="lista-tarjetas">
        {personas.map((persona) => (
          <TarjetaPersona key={persona._id || persona.id} persona={persona} />
        ))}
      </div>
    </div>
  );
};

export default ListaTarjetas;