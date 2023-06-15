/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import Filters from '../components/Filters';
import LineChart from '../components/LineChart';
import { AppContext } from '../context/AppContext';

export default function Graphic() {
  const { patientLineChart } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-around w-full h-screen bg-gray-200">
      <Filters genericButton="Lista de Pacientes" />
      {patientLineChart.patient && (<LineChart />)}
    </div>
  );
}
