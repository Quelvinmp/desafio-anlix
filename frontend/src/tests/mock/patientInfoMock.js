const patientInfoMock = {
  data: {
    latestPatientInformations: {
      patient: {
        nome: 'Alexandre Caleb Costa',
        idade: 55,
        cpf: '974.642.524-20',
        rg: '22.107.246-9',
        data_nasc: '19/01/1967',
        sexo: 'Masculino',
        signo: 'Capricórnio',
        mae: 'Beatriz Alícia',
        pai: 'Nelson Heitor Costa',
        email: 'aalexandrecalebcosta@br.loreal.com',
        senha: '6eXIFok6iQ',
        cep: '69309-415',
        endereco: 'Rua das Palmas de Santa Rita',
        numero: 765,
        bairro: 'Pricumã',
        cidade: 'Boa Vista',
        estado: 'RR',
        telefone_fixo: '(95) 3783-9661',
        celular: '(95) 99359-1588',
        altura: '1,96',
        peso: 63,
        tipo_sanguineo: 'A-',
        cor: 'laranja',
      },
      ind_card: {
        epoch: '1624330210',
        ind: '0.662953',
      },
      ind_pulm: {
        epochPulm: '1624255351',
        indPulm: '0.085284',
      },
    },
  },
  status: 200,
  statusText: 'OK',
  headers: {
    'content-length': '676',
    'content-type': 'application/json; charset=utf-8',
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter: [
      'xhr',
      'http',
    ],
    transformRequest: [
      null,
    ],
    transformResponse: [
      null,
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
    method: 'get',
    url: 'http://localhost:3001/patient/name=ale/diseases/info',
  },
  request: {},
};

export default patientInfoMock;
