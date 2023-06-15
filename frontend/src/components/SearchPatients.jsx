import React from 'react';

export default function SearchPatients() {
  return (
    <div className="">
      <form action="POST" className="flex flex-col items-center justify-center gap-3">

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
