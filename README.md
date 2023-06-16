# Desafio Anlix - Solução por: [Quelvin Machado de Paula](https://www.linkedin.com/in/quelvinmachadodepaula/)

[Português :brazil:](#português)
<br/>
[Inglês :us:](#)

## Português

### Como Executar o Projeto

Pré-Requisitos: npm || yarn || docker

```bash
# Clonar Repositório
git clone git@github.com:Quelvinmp/Star-Wars-Filters-Project.git

# Entrar na pasta do projeto desafio-anlix
cd 'desafio-anlix'

# Instalar Dependências
## NPM
npm install
## YARN
yarn
## DOCKER
docker compose up -d
docker exec -it <id-do-container-frontend> sh
npm install
docker exec -it <id-do-container-backend> sh
npm install

# Executar o Projeto
## NPM
npm start
## YARN
yarn run
## DOCKER
# sh frontend
npm run dev
# sh backend
npm run dev
```

### Conhecendo as Rotas da API e Como Utilizá-las
</br>

 /patient/name=***nome-do-paciente***
 
Retorna um array com todas as informações pessoais dos pacientes que contenham as letras indicadas em ***nome-do-paciente***
</br></br>

/patient/name=***nome-do-paciente***/disease=***doença***

Retorna um objeto contendo todas as informações pessoais da ***primeira pessoa encontrada*** pelo ***nome-do-paciente*** e sua característica mais recente. </br>
As opções disponíveis para ***disease*** são ***cardiaco*** e ***pulmonar***
</br></br>

/patient/name=***nome-do-paciente***/diseases/info

Retorna um objeto contendo todas as informações pessoais da ***primeira pessoa encontrada*** pelo ***nome-do-paciente*** e suas características mais recentes (tanto pulmonar quanto cardíaco).
</br></br>

/ind/name=***nome-do-paciente***/disease=***doença***/initial_ind=***valor-inicial-do-indice***/final_ind=***valor-final-do-indice***

Retorna um objeto contendo todas as informações pessoais da ***primeira pessoa encontrada*** pelo ***nome-do-paciente*** e sua característica mais recente (***pulmonar*** ou ***cardiaco***) entre os intervalos de valores dos indices indicados (***valor-inicial-do-indice*** e ***valor-final-do-indice***).
</br></br>

/date/date=***data***

Retorna um objeto contendo todas as informações de cada característica (***pulmonar*** e ***cardiaco***) que existem na data indicada em ***data***
</br></br>

/date/name=***nome-do-paciente***/disease=***doença***/initial_date=***data-inicial***/final_date=***data-final***

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







