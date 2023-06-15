/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

export default function SearchPatients() {
  const { setpatientInfo } = useContext(AppContext);
  const [name, setName] = useState('');

  const getPatients = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:3001/patient/name=${name}/diseases/info`)
      .then((res) => setpatientInfo(res.data.latestPatientInformations))
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <form onSubmit={getPatients} className="flex flex-col items-center justify-center gap-3">

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
    </div>
  );
}
