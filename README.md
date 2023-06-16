# Desafio Anlix - Solução por: [Quelvin Machado de Paula](https://www.linkedin.com/in/quelvinmachadodepaula/)

[Português :brazil:](#português)
<br/>
[English :us:](#english)

## Português

### Descrição do Desafio

Esse desafio consiste na criação de uma API usando uma grande base de dados de um hospital contendo informações (datas, dados pessoais, indices) de pacientes em estado terminal.</br>
Além de criar uma interface gráfica para que a pessoa usuária consiga realizar pesquisas, analisar gráficos temporais e baixar as informações em formato .csv

### Como Executar o Projeto

Pré-Requisitos: npm || docker

```bash
# Clonar Repositório
git clone git@github.com:Quelvinmp/Star-Wars-Filters-Project.git

# Entrar na pasta do projeto desafio-anlix
cd 'desafio-anlix'

# Instalar Dependências
## NPM
npm install
## DOCKER
docker compose up -d
docker exec -it <id-do-container-frontend> sh
npm install
docker exec -it <id-do-container-backend> sh
npm install

# Executar o Projeto
## NPM
npm start
## DOCKER
# sh frontend
npm run dev
# sh backend
npm run dev

### Obs.: As portas utilizadas são :5173 (Frontend) e :3001 (Backend). Certifique-se de que elas estão livres para uso!

# Rodar os testes do Projeto
## sh do frontend para rodar os testes do frontend
npm run test
## sh do backend para rodar os testes do backend
npm run test
```

### Conhecendo as Rotas da API e Como Utilizá-las
##### Clique [aqui](#api-returns--retornos-da-api) para ver objetos retornados em cada endpoint
</br>

```/patient/name=<nome-do-paciente> ```
 
Retorna um array com todas as informações pessoais dos pacientes que contenham as letras indicadas em ***nome-do-paciente***
</br></br>

```/patient/name=<nome-do-paciente>/disease=<doença>```

Retorna um objeto contendo todas as informações pessoais da ***primeira pessoa encontrada*** pelo ***nome-do-paciente*** e sua característica mais recente. </br>
As opções disponíveis para ***disease*** são ***cardiaco*** e ***pulmonar***
</br></br>

```/patient/name=<nome-do-paciente>/diseases/info```

Retorna um objeto contendo todas as informações pessoais da ***primeira pessoa encontrada*** pelo ***nome-do-paciente*** e suas características mais recentes (tanto pulmonar quanto cardíaco).
</br></br>

```/ind/name=<nome-do-paciente>/disease=<doença>/initial_ind=<valor-inicial-do-indice>/final_ind=<valor-final-do-indice>```

Retorna um objeto contendo todas as informações pessoais da ***primeira pessoa encontrada*** pelo ***nome-do-paciente*** e sua característica mais recente (***pulmonar*** ou ***cardiaco***) entre os intervalos de valores dos indices indicados (***valor-inicial-do-indice*** e ***valor-final-do-indice***).
</br></br>

```/date/date=<data>```

Retorna um objeto contendo todas as informações de cada característica (***pulmonar*** e ***cardiaco***) que existem na data indicada em ***data***
</br></br>

```/date/name=<nome-do-paciente>/disease=<doença>/initial_date=<data-inicial>/final_date=<data-final>```

Retorna um objeto contendo todas as informações pessoais da ***primeira pessoa encontrada*** pelo ***nome-do-paciente*** e todos os registros da característica indicada (***pulmonar*** ou ***cardiaco***) entre os intervalos de data indicados (***data-inicial*** e ***data-final***). </br>
O formato aceito pela API é DDMMAAAA
</br></br>

### Interface Gráfica
</br>

Todo o frontend foi construindo seguindo a prática de mobile first com alterações de estilização nos breakpoints: 640px e 1024px para uma melhor experiência do usuário em qualquer tamanho de tela.

##### Pesquisa

O usuário é capaz de pesquisar pacientes buscando pelo nome (ou letras) e armazenar em uma lista, a qual pode ser limpa completamente por meio de um botão. 

##### Baixar Arquivo .CSV

O usuário pode baixar um arquivo .csv onde é listado todos os registros das características de cada paciente presente na lista.</br>
O arquivo é originalmente ordenado pela data, mas a partir do download qualquer filtro poderá ser aplicado da forma que preferir!

##### Gráfico Temporal

O usuário é capaz de pesquisar um paciente e selecionar um índice para que possa ser apresentado um gráfico contendo todos os registros referente a essas informações selecionadas (***nome do paciente*** e ***indice***)
</br></br>

## English

### Challenge Description

This challenge consists of creating an API using a large hospital database containing information (dates, personal data, indexes) of terminally ill patients.</br>
In addition to creating a graphical interface so that the user can carry out searches, analyze time graphs and download information in .csv format

### How to Run the Project

Prerequisites: npm || docker

```bash
# Clone Repository
git clone git@github.com:Quelvinmp/Star-Wars-Filters-Project.git

# Enter the challenge-anlix project folder
cd 'challenge-anlix'

# Install Dependencies
## NPM
npm install
## DOCKER
docker compose up -d
docker exec -it <container-frontend-id> sh
npm install
docker exec -it <container-backend-id> sh
npm install

# Run the Project
## NPM
npm start
## DOCKER
# sh frontend
npm run dev
# sh backend
npm run dev

### Note: The ports used are :5173 (Frontend) and :3001 (Backend). Make sure they are free to use!

# Run the Project tests
## frontend sh to run frontend tests
npm run test
## sh from backend to run backend tests
npm run test
```

### Knowing API Routes and How to Use Them
##### Click [here](#api-returns--retornos-da-api) to see objects returned on each endpoint
</br>

```/patient/name=<patient-name> ```
 
Returns an array with all the personal information of patients that contain the letters indicated in ***patient-name***
</br></br>

```/patient/name=<patient-name>/disease=<disease>```

Returns an object containing all the personal information of the ***first person found*** by ***patient-name*** and his most recent characteristic. </br>
The available options for ***disease*** are ***cardiaco*** and ***pulmonar***
</br></br>

```/patient/name=<patient-name>/diseases/info```

Returns an object containing all the personal information of the ***first person found*** by ***patient-name*** and their most recent characteristics (both pulmonar and cardiaco).
</br></br>

```/ind/name=<patient-name>/disease=<disease>/initial_ind=<initial-index-value>/final_ind=<final-index-value>```

Returns an object containing all the personal information of the ***first person found*** by ***patient-name*** and its most recent characteristic (***pulmonar*** or ***cardiaco** *) between the value ranges of the indicated indices (***initial-index-value*** and ***final-index-value***).
</br></br>

```/date/date=<date>```

Returns an object containing all the information for each characteristic (***pulmonar*** and ***cardiaco***) that exist on the date indicated in ***date***
</br></br>

```/date/name=<patient-name>/disease=<disease>/initial_date=<initial-date>/final_date=<final-date>```

Returns an object containing all the personal information of the ***first person found*** by ***patient-name*** and all records of the indicated characteristic (***pulmonar*** or ***cardiaco ***) between the indicated date ranges (***start-date*** and ***end-date***). </br>
The format accepted by the API is DDMMYYYY
</br></br>

### Graphic interface
</br>

The entire frontend was built following the mobile first practice with stylization changes in the breakpoints: 640px and 1024px for a better user experience on any screen size.

##### Search

The user is able to search for patients by name (or letters) and store them in a list, which can be completely cleared by pressing a button.

##### Download .CSV File

The user can download a .csv file where all the records of the characteristics of each patient present in the list are listed.</br>
The file is originally sorted by date, but once downloaded, any filter can be applied however you like!

##### Time Chart

The user is able to search for a patient and select an index so that a graph can be displayed containing all the records referring to the selected information (***patient name*** and ***index***)

## API Returns / Retornos da Api

### Request

```GET /patient/name=alexandre```

### Response

```json
{
  "result": [
    {
      "nome": "Alexandre Caleb Costa",
      "idade": 55,
      "cpf": "974.642.524-20",
      "rg": "22.107.246-9",
      "data_nasc": "19/01/1967",
      "sexo": "Masculino",
      "signo": "Capricórnio",
      "mae": "Beatriz Alícia",
      "pai": "Nelson Heitor Costa",
      "email": "aalexandrecalebcosta@br.loreal.com",
      "senha": "6eXIFok6iQ",
      "cep": "69309-415",
      "endereco": "Rua das Palmas de Santa Rita",
      "numero": 765,
      "bairro": "Pricumã",
      "cidade": "Boa Vista",
      "estado": "RR",
      "telefone_fixo": "(95) 3783-9661",
      "celular": "(95) 99359-1588",
      "altura": "1,96",
      "peso": 63,
      "tipo_sanguineo": "A-",
      "cor": "laranja"
    }
  ]
}
```
</br>

### Request

```GET /patient/name=alexandre/diseases/info```

### Response

```json
{
  "latestPatientInformations": {
    "patient": {
      "nome": "Alexandre Caleb Costa",
      "idade": 55,
      "cpf": "974.642.524-20",
      "rg": "22.107.246-9",
      "data_nasc": "19/01/1967",
      "sexo": "Masculino",
      "signo": "Capricórnio",
      "mae": "Beatriz Alícia",
      "pai": "Nelson Heitor Costa",
      "email": "aalexandrecalebcosta@br.loreal.com",
      "senha": "6eXIFok6iQ",
      "cep": "69309-415",
      "endereco": "Rua das Palmas de Santa Rita",
      "numero": 765,
      "bairro": "Pricumã",
      "cidade": "Boa Vista",
      "estado": "RR",
      "telefone_fixo": "(95) 3783-9661",
      "celular": "(95) 99359-1588",
      "altura": "1,96",
      "peso": 63,
      "tipo_sanguineo": "A-",
      "cor": "laranja"
    },
    "ind_card": {
      "epoch": "1624330210",
      "ind": "0.662953"
    },
    "ind_pulm": {
      "epochPulm": "1624255351",
      "indPulm": "0.085284"
    }
  }
}
```
</br>

### Request

```GET /patient/name=alexandre/disease=cardiaco```

### Response

```json
{
  "mostRecentCharacteristic": {
    "patient": {...},
    "mostRecentChar": {
      "cpf": "974.642.524-20",
      "epoch": "1624330210",
      "ind": "0.662953"
    }
  }
}
```
</br>

### Request

```GET /ind/name=alexandre/disease=cardiaco/initial_ind=0.5/final_ind=0.6```

### Response

```json
{
  "latestCharEqualToSpecifiedIndAndDisease": {
    "patient": {...},
    "initial_ind": "0.5",
    "final_ind": "0.6",
    "ind_card": {
      "mostRecentCharacteristic": {
        "cpf": "041.897.838-70",
        "epoch": "1624329301",
        "ind": "0.563628"
      }
    }
  }
}
```
</br>

### Request

```GET /date/date=01062021```

### Response

```json
{
  "allCharByDate": {
    "filter_date": "01062021",
    "ind_card": [
      {
        "cpf": "529.310.074-20",
        "epoch": "1622563699",
        "ind": "0.715997"
      },
      {
        "cpf": "618.702.796-54",
        "epoch": "1622600710",
        "ind": "0.919170"
      },
      {
        "cpf": "285.773.707-63",
        "epoch": "1622572441",
        "ind": "0.392114"
      },
      {...}
    ],
    "ind_pulm": [
      {
        "cpf": "069.221.825-45",
        "epoch": "1622537549",
        "ind": "0.646007"
      },
      {
        "cpf": "130.423.502-58",
        "epoch": "1622543577",
        "ind": "0.859751"
      },
      {
        "cpf": "955.930.874-23",
        "epoch": "1622575305",
        "ind": "0.949747"
      },
     {...}
    ]
  }
}
```
</br>

### Request

```GET /date/name=alexandre/disease=cardiaco/initial_date=13062021/final_date=21062021```

### Response

```json
{
  "patientCharByDateInterval": {
    "patient": {...},
    "initial_date": "13062021",
    "final_date": "21062021",
    "message": "Search performed between the specified dates",
    "ind_card": [
      {
        "cpf": "974.642.524-20",
        "epoch": "1623622976",
        "ind": "0.077012"
      },
      {
        "cpf": "974.642.524-20",
        "epoch": "1623575110",
        "ind": "0.831961"
      },
      {
        "cpf": "974.642.524-20",
        "epoch": "1623573849",
        "ind": "0.986810"
      },
     {...}
    ]
  }
}
```
