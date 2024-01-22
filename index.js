// Como importar e exportar módulos com require e module.exports
// const { Person } = require("./person.js");

// const person1 = new Person("miguel");
// console.log(person1.sayMyName());

// criando um servidor usando Express e MongoDB
const dotenv = require("dotenv");
dotenv.config();

const connectToDataBase = require("./src/database/connect");
connectToDataBase();

require("./modules/express");
