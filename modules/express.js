const express = require("express");

const app = express();
const port = 8080;

// SINTAXE:
// .get(path, (req, resp) => {...codigo})

// ENVIANDO HTML:
app.get("/home", (req, resp) => {
  resp.contentType("application/text");
  resp.status(200).send("<h1>Express funcionou</h1>");
});

// ENVIANDO JSON:
app.get("/users", (req, resp) => {
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
  resp.status(200).json(users);
});

// INICIALIZANDO SERVIDOR NA WEB:
app.listen(port, () => {
  console.log("deu bom familia");
});
