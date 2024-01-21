const http = require("http");
const port = 5000;

// BASICAMENTE:
// coloca o cabeçalho com status e tipo de dado e envia no .end

// SINTAXE:
// http.createServer((req, resp) => {...codigo})

// IMPORTANTE:
// request é o que o usuário/pessoa vai mandar para o servidor.
// response é o que o servidor vai retornar para o usuário.

// Request (req): objeto da requisião, que é como se fosse um pedido feito pelo sistema ao qual pode ser bem-sucedido/negado ou não.
// StatusCode e Header do http em Content-Type são configurados aqui pois fazem parte do pedido.
// ex: Caso(if) o statusCode dê 200(sucesso), faça isso

// Response (res): objeto da resposta do servidor. É sempre uma resposta que vai dar para o usuário ou destino final após uma requisição.
const server = http.createServer((req, resp) => {
  if (req.url === "/home") {
    // para enviar uma resposta, você deve especificar o tipo de dado que está enviando
    // faça isso por meio do Content-Type no .writeHead como no exemplo abaixo

    // .writeHead (
    // <number>: envia o statusCode que você escolher para o usuario/cliente, geralmente é 200 pq deu tudo bem, tudo certo)
    // <object> | <array>: basicamente especifica o tipo de dado que você vai enviar
    // ex: "Content-Type": "text/html"
    // )
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.end("<h1>olá pessoal, o resp.end funcionou! </h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "joão miguel",
        idade: 20,
      },
      {
        name: "pedro",
        idade: 17,
      },
    ];
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end(JSON.stringify(users));
  }
});

// SINTAXE:
// .listen(port, hostname, () => {})
server.listen(port, () => {
  console.log(`ta rodando familia! na porta ${port}`);
});
