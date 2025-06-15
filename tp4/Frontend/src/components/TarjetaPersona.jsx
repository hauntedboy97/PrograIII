import React from 'react';
import './TarjetaPersona.css'; 

const TarjetaPersona = ({ persona }) => {
  if (!persona) {
    return <div className="tarjeta-persona">No se encontraron datos de la persona.</div>;
  }

  return (
    <div className="tarjeta-persona">
      <h3>{persona.nombre} {persona.apellido}</h3>
      <p><strong>Edad:</strong> {persona.edad}</p>
      <p><strong>Email:</strong> {persona.email}</p>
    </div>
  );
};

export default TarjetaPersona;