/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

function AppProvider({ children }) {
  const [patientInfo, setPatientInfo] = useState([]);
  const [patientLineChart, setPatientLineChart] = useState({});
  const [chosenInd, setChosenInd] = useState('');
  const [invalidName, setInvalidName] = useState('');

  const values = useMemo(() => ({
    patientInfo,
    setPatientInfo,
    invalidName,
    setInvalidName,
    patientLineChart,
    setPatientLineChart,
    chosenInd,
    setChosenInd,
  }), [patientInfo,
    setPatientInfo, invalidName, setInvalidName, patientLineChart, setPatientLineChart,
    chosenInd, setChosenInd]);

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
