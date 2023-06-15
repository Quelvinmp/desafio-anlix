import React, { useContext } from 'react';
import SearchPatients from '../components/SearchPatients';
import CharsCard from '../components/CharsCard';
import { AppContext } from '../context/AppContext';

export default function Patients() {
  const { patientInfo } = useContext(AppContext);

  console.log(patientInfo);

  return (
    <div className="flex flex-col justify-around w-full h-screen p-4 bg-gray-200">
      <SearchPatients />
      <section className="w-full p-4 bg-red-300 rounded-xl h-[400px]">
        {patientInfo.patient && (<CharsCard info={patientInfo} />)}
      </section>
    </div>
  );
}
