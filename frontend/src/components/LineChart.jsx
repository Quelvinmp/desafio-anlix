/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { AppContext } from '../context/AppContext';

export default function LineChart() {
  const { patientLineChart, chosenInd } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({});

  const indText = `Índice ${Object.keys(patientLineChart)[4] === 'ind_card' ? 'Cardíaco' : 'Pulmonar'}`;

  const formatDate = (epoch) => {
    const date = new Date(epoch * 1000);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const buildData = () => {
    const allChars = Object.values(patientLineChart[chosenInd]);

    const formatedChars = allChars.map(({ epoch, ind }) => [formatDate(epoch), +ind]);

    const dataLegend = ['Dia', indText];

    const formatedData = [dataLegend, ...formatedChars];

    setData(formatedData);
  };

  useEffect(() => {
    buildData();
    setOptions({
      chart: {
        title: `${indText} de todos os tempos do banco`,
        subtitle: patientLineChart.patient.nome,
      },
    });
  }, [patientLineChart]);

  return (
    <div>
      <Chart
        className=""
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
