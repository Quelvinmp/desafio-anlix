import React, { useContext } from 'react';
import Filters from '../components/Filters';
import CharsCard from '../components/CharsCard';
import { AppContext } from '../context/AppContext';

export default function Patients() {
  const { patientInfo, invalidName, setPatientInfo } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-around w-full h-screen gap-6 p-4">
      <Filters genericButton="Gráfico Temporal" />
      {invalidName && (<p className="text-xs text-center text-error">{invalidName}</p>)}
      {patientInfo.length > 0 && (
      <section className="flex flex-col justify-between w-full h-[450px] max-w-5xl mx-auto p-4 bg-base-200 rounded-xl gap-3 sm:h-[550px] ">
        <div className="flex flex-col gap-3 overflow-y-scroll rounded-md">
          {patientInfo
            .map((info) => (<CharsCard info={info} key={`${info.patient.nome}-${info.patient.data_nasc}`} />))}
        </div>
        <div className="flex justify-end">
          <button type="button" className="btn btn-error" onClick={() => setPatientInfo([])}>Limpar</button>
        </div>
      </section>
      )}
    </div>
  );
}
