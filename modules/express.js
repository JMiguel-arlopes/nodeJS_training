const express = require("express");
const UserModel = require("../modules/models/user.model");

const app = express();
const port = 8080;

app.use(express.json());

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

// A função app.post só é acionada quando ocorre uma requisição post e não quando entra na página.
// esse post vai seguir um modelo que você montou pelo mongoose
// utilize o algumaCoisaModel.create no req.body (que é onde fica as informações mandadas o Post ou Form HTML)
// faça o servidor retornar o json do que você enviou: resp.status(201).json(oDadoAcima)

app.post("/users", async (req, resp) => {
  try {
    const user = await UserModel.create(req.body);
    resp.status(201).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// INICIALIZANDO SERVIDOR NA WEB:
app.listen(port, () => {
  console.log("deu bom familia");
});
