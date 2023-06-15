/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import axios from 'axios';

export default function SearchPatients() {
  const [patients, setPatients] = useState([]);

  const getPatients = (e) => {
    e.preventDefault();

    axios.get('http://localhost:3001/patient/name=ale/diseases/info')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <form onSubmit={getPatients} className="flex flex-col items-center justify-center gap-3">

        <div>
          <input type="text" name="patient-name" placeholder="Digite o Nome do Paciente" id="patient-name" className="w-full max-w-xs input input-bordered input-primary" />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Pesquisar</button>
        </div>

      </form>
    </div>
  );
}

// /patient/name=:name/diseases/info
