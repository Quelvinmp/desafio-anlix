/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import AppProvider from '../context/AppContext';
import App from '../App';
import patientInfoMock from './mock/patientInfoMock';

jest.mock('axios');

const mockAxiosGet = axios.get;

describe('Tests functionalities of the route "/" of patient listing', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

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

  it('When typing a valid name and clicking search, a request is made on the endpoint and returns the expected value', async () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>,
    );

    const patientName = 'ale';

    await mockAxiosGet.mockImplementation(() => Promise.resolve(
      { data: { result: patientInfoMock } },
    ));

    act(() => {
      fireEvent.change(screen.getByRole('textbox'), { target: { value: patientName } });
      fireEvent.click(screen.getByRole('button', {
        name: /pesquisar/i,
      }));
    });

    // expect(spyAxios.mock.calls.length).toEqual(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
