import React, { useContext } from 'react';
import Filters from '../components/Filters';
import CharsCard from '../components/CharsCard';
import { AppContext } from '../context/AppContext';

export default function Patients() {
  const { patientInfo, invalidName } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-around w-full h-screen p-4 bg-gray-200">
      <Filters />
      {invalidName && (<p className="text-xs text-center text-error">{invalidName}</p>)}
      <section className="flex flex-col justify-between w-full h-[450px] p-4 bg-red-300 rounded-xl gap-3">
        <div className="flex flex-col gap-3 overflow-y-scroll rounded-md">
          {patientInfo.length && (patientInfo.map((info) => (<CharsCard info={info} />)))}
        </div>
        <div className="flex justify-end">
          <button type="button" className="btn btn-error">Limpar</button>
        </div>
      </section>
    </div>
  );
}
