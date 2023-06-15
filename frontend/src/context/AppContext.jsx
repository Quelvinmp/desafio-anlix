/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

function AppProvider({ children }) {
  const [patientInfo, setpatientInfo] = useState([]);
  const [invalidName, setInvalidName] = useState('');

  const values = useMemo(() => ({
    patientInfo, setpatientInfo, invalidName, setInvalidName,
  }), [patientInfo, setpatientInfo, invalidName, setInvalidName]);

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
