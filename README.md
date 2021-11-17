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
      <a href="#sobre-o-desafio">Sobre o Desafio</a>
      <ul>
        <li><a href="#tecnologias-e-recursos">Tecnologias e Recursos</a></li>
      </ul>
      <ul>
        <li><a href="#regras-de-negocio">Regras de Negócio</a></li>
      </ul>
    </li>
    <li>
      <a href="#instrucoes-gerais">Instruções Gerais</a>
      <ul>
        <li><a href="#configuracoes-e-instalacoes">Configurações e Instalações</a></li>
      </ul>
    </li>
    <li>
      <a href="#utilizando-a-api">Utilizando a API</a></li>
      <ul>
        <li><a href="#swagger">Swagger</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## :notebook_with_decorative_cover: Sobre o Desafio

### Tecnologias e Recursos

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

- [Logs]
A API registra ações relacionadas aos endpoints da aplicação em uma tabela específica no banco chamada <i>logs</i>. Os dados informam data e usuário que executou determinadas rota;

- [Segurança]
A aplicação conta com a criptogafia de senhas, garantindo confidencialidade dos dados dos usuários;

### Regras de Negócio

- Dado um CEP válido, deve retornar o endereço correspondente;
- Dado um CEP válido, que não exista o endereço, deve substituir um dígito da direita para a esquerda por zero até que o endereço seja localizado (Exemplo: Dado 22333999 tentar com 22333990, 22333900 …);
- Dado um CEP inválido, deve retornar uma mensagem reportando o erro: "CEP inválido";

<!-- GETTING STARTED -->

## :book: Instruções Gerais

A seguir estão as instruções para a instalação, configuração e uso da API do projeto.

### Configurações e Instalações

1. Clone o repositório

```sh
  git clone https://github.com/TamiresLucena/busca-cep.git
```

2. Subir a aplicação no Docker

```sh
  docker-compose up -d
```

3. Rodar testes

```sh
  docker-compose exec busca-cep-api npm run test
```


<!-- USAGE EXAMPLES -->

## :electric_plug: Utilizando a API

### Swagger

1. Acesse: <a href="localhost:3333/docs">localhost:3333/docs</a>;

2. Execute o post de autenticação para gerar o token a ser utilizado nas demais requisições;

3. Insira o token retornado da requisição anterior no campo 'Authorize' identificado com um cadeada no canto superior direito, da seguinte maneira: `  Bearer <token> `

4. Realizada a autenticação, os endpoints estarão todos liberados;
















