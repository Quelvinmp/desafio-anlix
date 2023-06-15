/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function Filters() {
  const { patientInfo, setPatientInfo, setInvalidName } = useContext(AppContext);
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const getPatients = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:3001/patient/name=${name}/diseases/info`)
      .then((res) => {
        setPatientInfo([...patientInfo, res.data.latestPatientInformations]);
        setInvalidName('');
      })
      .catch(() => setInvalidName('Este nome não consta na base de dados.'));
  };

  const downloadCSV = () => {
    console.log(patientInfo);
  };

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={getPatients} className="flex items-center justify-center gap-3">

        <div>
          <input
            type="text"
            name="patient-name"
            placeholder="Digite o Nome do Paciente"
            id="patient-name"
            onChange={({ target: { value } }) => setName(value)}
            className="w-full max-w-xs input input-bordered input-primary"
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Pesquisar</button>
        </div>

      </form>

      <div className="flex justify-around">
        <button type="button" className="btn btn-success" onClick={downloadCSV}>Baixar .csv</button>
        <button type="button" className="btn btn-info" onClick={() => navigate('/graphic')}>Analisar Gráfico</button>
      </div>
    </div>
  );
}
