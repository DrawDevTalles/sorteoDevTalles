import React from 'react';
import Notfound from '../../assets/404.png';

function NotFound() {
  return (
    <div>
      <img src={Notfound} alt="Imagen de 404" />
      <h2>404 - Página no encontrada</h2>
    </div>
  );
}

export default NotFound;
