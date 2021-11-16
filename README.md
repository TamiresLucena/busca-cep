<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center">Desafio Busca CEP</h2>

  <p align="center">
    Serviço HTTP para busca de endereço completo através de um CEP informado.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Tabela de conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Desafio</a>
      <ul>
        <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
      </ul>
    </li>
    <ul>
        <li><a href="#regras-de-negócio">Regras de negócio</a></li>
      </ul>
    </li>
    <li>
      <a href="#instruções-gerais">Instruções gerais</a>
      <ul>
        <li><a href="#configurando">Configuração</a></li>
      </ul>
    </li>
    <ul>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#utilizando-a-api">Utilizando a API</a></li>
      <ul>
        <li><a href="#endpoints">Endpoints</a></li>
      </ul>
        <ul>
        <li><a href="#swagger">Swagger</a></li>
      </ul>
    </li>
    </li> 
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## :notebook_with_decorative_cover: Sobre o Desafio

### Tecnologias Utilizadas

O projeto foi criado usando as tecnologias:

- [Node.Js] 
A API foi desenvolvida utilizando Node.js e a escolha se deu pelo fato da linguagem ser moderna e eu ter mais afinidade/gostar de lidar! Como meu objetivo é trabalhar com esta tecnologia, decidi por ela para aprimorar e demonstrar meus conhecimentos;

- [PostgreSQL]
Para o banco de dados;

- [Knex]
Como <i>query builder</i>;

- [Swagger]
Para documentar a API;

- [Docker] 
Container para execução da API;

- [Redis] 
Uso de caches visando velocidade, otimização, melhora de experiência do usuário - que obtem respostas mais rápidas, além de mitigar o trabalho da API;

- [Jest]
Para realização de testes;

### Regras de Negócio

- Dado um CEP válido, deve retornar o endereço correspondente;
- Dado um CEP válido, que não exista o endereço, deve substituir um dígito da direita para a esquerda por zero até que o endereço seja localizado (Exemplo: Dado 22333999 tentar com 22333990, 22333900 …);
- Dado um CEP inválido, deve retornar uma mensagem reportando o erro: "CEP inválido";

<!-- GETTING STARTED -->

## :book: Instruções Gerais

A seguir estão as instruções para a instalação, configuração e uso da API do projeto.

### Configurações e Instalações

## Docker

1. Clone o repositório

```sh
   git clone https://github.com/TamiresLucena/busca-cep.git
```

2. Subir a aplicação no Docker

```sh
    docker-compose build
```

```sh
    docker-compose up -d
```

## Local

1. Clone o repositório

```sh
   git clone https://github.com/TamiresLucena/busca-cep.git
```

2. Instalar dependências

```sh
   npm install
```

3. Executar a API localmente

```sh
    npm start
```

5. Executar os testes localmente

```sh
    npm test
```

<!-- USAGE EXAMPLES -->

## :electric_plug: Utilizando a API

### Acesso local a documentação <i>Swagger</i>

No navegador, digitar <a href="localhost:3000/docs">localhost:3000/docs</a>. 

### Endpoints

O usuário tem acesso aos seguintes endpoints:

- Autenticação
- Saúde
- Endereços



