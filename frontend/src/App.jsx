import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Patients from './pages/Patients';
import Graphic from './pages/Graphic';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Patients} />
      <Route exact path="/graphic" Component={Graphic} />
    </Routes>
  );
}

export default App;
