/* eslint-disable react/prop-types */
import React from 'react';

export default function CharsCard({
  info: {
    patient, ind_card: { epoch: cardEpoch, ind: cardInd }, ind_pulm: { epochPulm, indPulm },
  },
}) {
  const transformDate = (unixTimestamp) => {
    const date = new Date(+unixTimestamp * 1000);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div>

      <div className="p-4 text-sm rounded-md lg:p-2 sm:p-3 bg-neutral">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-around">

          <div className="flex flex-col items-center">
            <p className="">{patient.nome}</p>
            <p className="text-xs">
              CPF:
              {' '}
              {patient.cpf}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-12">

            <div className="flex items-center justify-center gap-6">
              <p className="text-center">Índice Cardiaco</p>
              <p className="">{cardInd}</p>
              <p>{transformDate(cardEpoch)}</p>
            </div>

            <span className="hidden m-auto lg:block">|</span>

            <div className="flex items-center justify-center gap-6 lg:flex-row">
              <p className="text-center">Índice Pulmonar</p>
              <p>{indPulm}</p>
              <p>{transformDate(epochPulm)}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
