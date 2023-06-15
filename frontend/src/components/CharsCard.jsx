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

      <div className="p-4 bg-gray-200 rounded-md">
        <div className="flex flex-col gap-3">

          <div className="flex justify-around">
            <p>{patient.nome}</p>
            <p>{patient.cpf}</p>
          </div>

          <div className="flex justify-center gap-6">
            <p>Cardiaco</p>
            <p>{transformDate(cardEpoch)}</p>
            <p>{cardInd}</p>
          </div>

          <div>
            <div className="flex justify-center gap-6">
              <p>Pulmonar</p>
              <p>{transformDate(epochPulm)}</p>
              <p>{indPulm}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
