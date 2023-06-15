import React from 'react';
import SearchPatients from './SearchPatients';
import CharsCard from './CharsCard';

export default function Patients() {
  return (
    <div className="flex flex-col justify-around w-full h-screen p-4 bg-gray-200">
      <SearchPatients />
      <section className="w-full p-4 bg-red-300 rounded-xl h-[400px]">
        <CharsCard />
      </section>
    </div>
  );
}
