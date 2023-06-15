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

      <div className="p-4 text-sm bg-gray-200 rounded-md">
        <div className="flex flex-col gap-3">

          <div className="flex flex-col items-center">
            <p className="">{patient.nome}</p>
            <p className="text-xs">
              CPF:
              {' '}
              {patient.cpf}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <p className="text-center">Índice Cardiaco</p>
            <p className="">{cardInd}</p>
            <p>{transformDate(cardEpoch)}</p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-6">
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
