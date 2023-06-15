import React from 'react';
import Filters from '../components/Filters';

export default function Graphic() {
  return (
    <div className="flex flex-col justify-around w-full h-screen p-4 bg-gray-200">
      <Filters genericButton="Lista de Pacientes" />
      <div>Graphic</div>
    </div>
  );
}
