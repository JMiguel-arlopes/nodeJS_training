// Como importar e exportar módulos com require e module.exports
// const { Person } = require("./person.js");

// const person1 = new Person("miguel");
// console.log(person1.sayMyName());

// Testando Path (tem acesso aos names dos arquivos)
// require("./modules/path.js");

// Testando FS (manipula/cria arquivos)
// require("./modules/fs.js");

const http = require("http");
const port = 5000;
// SINTAXE:
// http.createServer((req, resp) => {...codigo})

// IMPORTANTE:
// request é o que o usuário/pessoa vai mandar para o servidor.
// response é o que o servidor vai retornar para o usuário.

// Request (req): objeto da requisião, que é como se fosse um pedido feito pelo sistema ao qual pode ser bem-sucedido/negado ou não.
// StatusCode e Header do http em Content-Type são configurados aqui pois fazem parte do pedido.
// ex: Caso(if) o statusCode dê 200(sucesso), faça isso

// Response (res): objeto da resposta do servidor. É sempre uma resposta que vai dar para o usuário ou destino final após uma requisição.
const server = http.createServer();
