const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger_output.json";
const endpointFiles = ["./src/app.js"];

const doc = {
  info: {
    version: "2.0.0",
    title: "Swagger Busca CEP",
    description: "API para endereço completo a partir de um CEP.",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [],
  definitions: {}
};

swaggerAutogen(outputFile, endpointFiles, doc);