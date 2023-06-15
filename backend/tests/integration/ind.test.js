const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

const successOutput = {
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
  initial_ind: '0.6',
  final_ind: '0.7',
  ind_card: {
    mostRecentCharacteristic: {
      cpf: '810.489.602-42',
      epoch: '1624330533',
      ind: '0.610690',
    },
  },
};

describe('Looking for patients and diseases in route /ind', () => {
  it(`/name=:name/disease=:disease/initial_ind=:initial_ind/final_ind=:final_ind
  returns the most recentindex that is equal to the specified index and disease`, async () => {
    const response = await chai.request(app)
    .get('/ind/name=ale/disease=cardiaco/initial_ind=0.6/final_ind=0.7');
    expect(response.status).to.be.equal(200);
    expect(response.body.latestCharEqualToSpecifiedIndAndDisease).to.have.all
    .keys('patient', 'initial_ind', 'final_ind', 'ind_card');
    expect(response.body.latestCharEqualToSpecifiedIndAndDisease).to.be.deep.equal(successOutput);
  });

  it(`/name=:name/disease=:disease/initial_ind=:initial_ind/final_ind=:final_ind
  returns an error message if no result is found within the range of specified indexes`,
  async () => {
    const response = await chai.request(app)
    .get('/ind/name=ale/disease=cardiaco/initial_ind=0.00001/final_ind=0.00003');
    expect(response.status).to.be.equal(404);
    expect(response.body.message).to.be.equal('Specified Index Not Found');
  });
});