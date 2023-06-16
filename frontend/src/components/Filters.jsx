/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useContext, useEffect, useState,
} from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { AppContext } from '../context/AppContext';

export default function Filters({ genericButton }) {
  const {
    patientInfo, setPatientInfo, setInvalidName, setPatientLineChart, setChosenInd,
  } = useContext(AppContext);
  const [patientName, setPatientName] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [csvData, setCsvData] = useState([]);
  const [confirmeDownload, setConfirmeDownload] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const getPatients = (e) => {
    if (!confirmeDownload) e.preventDefault();
    if (confirmeDownload) {
      setConfirmeDownload(false);
      return;
    }

    if (pathname === '/' && e.target.innerHTML === 'Pesquisar') {
      axios.get(`http://localhost:3001/patient/name=${patientName}/diseases/info`)
        .then((res) => {
          setPatientInfo([...patientInfo, res.data.latestPatientInformations]);
          setInvalidName('');
          setPatientName('');
        })
        .catch(() => {
          if (patientName.length) setInvalidName('Este nome não consta na base de dados.');
          else { setInvalidName('Por favor, insira um nome!'); }
        });
      return;
    }
    if (pathname === '/' && e.target.innerHTML === 'Baixar .csv') {
      const diseases = ['cardiaco', 'pulmonar'];
      const data = [];
      const header = ['nome', 'cpf', 'epoch', 'ind', 'disease'];

      const promises = [];

      patientInfo.forEach((info) => {
        diseases.forEach((disease) => {
          const promise = axios.get(`http://localhost:3001/date/name=${info.patient.nome}/disease=${disease}/initial_date=01011900/final_date=01011900`)
            .then(({ data: { patientCharByDateInterval: char } }) => {
              const chosenDisease = char[disease === 'cardiaco' ? 'ind_card' : 'ind_pulm'];
              const allDiseasesChars = chosenDisease.map((item) => {
                const diseaseChar = [
                  info.patient.nome,
                  item.cpf,
                  item.epoch,
                  item.ind,
                  disease,
                ];
                return diseaseChar;
              });
              data.push(...allDiseasesChars);
            });
          promises.push(promise);
        });
      });

      setConfirmeDownload(true);

      Promise.all(promises).then(() => {
        data.sort((a, b) => Number(b[2]) - Number(a[2]));
        data.unshift(header);
        setCsvData(data);
      });

      return;
    }
    axios.get(`http://localhost:3001/date/name=${patientName}/disease=${selectedDisease}/initial_date=01011900/final_date=01011900`)
      .then((res) => {
        setPatientLineChart(res.data.patientCharByDateInterval);
        setPatientName('');
        setChosenInd(selectedDisease === 'cardiaco' ? 'ind_card' : 'ind_pulm');
      })
      .catch(() => setInvalidName('Erro ao Baixar .csv'));
  };

  useEffect(() => {
    if (patientName.length > 0 && selectedDisease.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [patientName, selectedDisease]);

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col items-center justify-center gap-3">

        <div className="flex gap-3">
          <div>
            <input
              type="text"
              name="patient-name"
              placeholder="Digite o Nome do Paciente"
              id="patient-name"
              value={patientName}
              onChange={({ target: { value } }) => setPatientName(value)}
              className="w-full max-w-xs input input-bordered input-primary"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary" disabled={(pathname === '/graphic' && isDisabled)} onClick={getPatients}>Pesquisar</button>
          </div>
        </div>

        {pathname === '/graphic' && (
          <div className="flex gap-3">
            <label htmlFor="ind-card" className="flex items-center gap-2">
              <input
                type="radio"
                name="cardiaco"
                id="ind-card"
                className="w-6 h-6 radio radio-primary"
                onChange={({ target: { name } }) => setSelectedDisease(name)}
                checked={selectedDisease === 'cardiaco'}
              />
              Índice Cardíaco
            </label>
            <label htmlFor="ind-pulm" className="flex items-center gap-2">
              <input
                type="radio"
                name="pulmonar"
                id="ind-pulm"
                className="w-6 h-6 radio radio-primary"
                onChange={({ target: { name } }) => setSelectedDisease(name)}
                checked={selectedDisease === 'pulmonar'}
              />
              Índice Pulmonar
            </label>
          </div>
        )}

      </form>

      <div className="flex justify-around">
        {pathname === '/' && (
        <CSVLink
          className="btn btn-success"
          data={csvData}
          onClick={getPatients}
        >
          {confirmeDownload ? 'Confirmar' : 'Baixar .csv'}
        </CSVLink>
        )}
        <button type="button" className="btn btn-info" onClick={() => navigate(pathname === '/' ? '/graphic' : '/')}>{genericButton}</button>
      </div>
    </div>
  );
}
