import React, { useContext } from 'react';
import Filters from '../components/Filters';
import CharsCard from '../components/CharsCard';
import { AppContext } from '../context/AppContext';

export default function Patients() {
  const { patientInfo, invalidName, setPatientInfo } = useContext(AppContext);

  // csv: /date/name=:name/disease=:disease/initial_date=:initial_date/final_date=:final_date
  return (
    <div className="flex flex-col justify-around w-full h-screen p-4 bg-gray-200">
      <Filters genericButton="Gráfico Temporal" />
      {invalidName && (<p className="text-xs text-center text-error">{invalidName}</p>)}
      <section className="flex flex-col justify-between w-full h-[450px] p-4 bg-red-300 rounded-xl gap-3">
        <div className="flex flex-col gap-3 overflow-y-scroll rounded-md">
          {patientInfo.length > 0 && (patientInfo
            .map((info) => (<CharsCard info={info} key={`${info.patient.nome}-${info.patient.data_nasc}`} />)))}
        </div>
        <div className="flex justify-end">
          <button type="button" className="btn btn-error" onClick={() => setPatientInfo([])}>Limpar</button>
        </div>
      </section>
    </div>
  );
}
