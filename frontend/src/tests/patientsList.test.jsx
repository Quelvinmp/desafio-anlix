/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from '../context/AppContext';
import App from '../App';

/* eslint-disable no-undef */
describe('Tests functionalities of the route "/" of patient listing', () => {
  it('The initial elements are on the screen', () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /pesquisar/i,
    })).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /gráfico temporal/i,
    })).toBeInTheDocument();
    expect(screen.getByRole('link', {
      name: /baixar \.csv/i,
    })).toBeInTheDocument();
  });
});
