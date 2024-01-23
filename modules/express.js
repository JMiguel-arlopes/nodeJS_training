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
app.get("/test", (req, resp) => {
  const test = [
    {
      name: "joão miguel",
      idade: 20,
    },
    {
      name: "pedro",
      idade: 17,
    },
  ];
  resp.status(200).json(test);
});

// A função app.post só é acionada quando ocorre uma requisição post e não quando entra na página.
// esse post vai seguir um modelo que você montou pelo mongoose
// utilize o algumaCoisaModel.create no req.body (que é onde fica as informações mandadas o Post ou Form HTML)
// faça o servidor retornar o json do que você enviou: resp.status(201).json(oDadoAcima)

// PEGA O JSON INTEIRO PARA O USUARIO
app.get("/users", async (req, resp) => {
  try {
    const users = await UserModel.find({});
    resp.status(200).json(users);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// PEGA UM ITEM ESPECIFICO DO JSON PELO ID
app.get("/users/:id", async (req, resp) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    resp.status(200).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// POSTA/INSERE 1 ITEM NO JSON
app.post("/users", async (req, resp) => {
  try {
    const user = await UserModel.create(req.body);
    resp.status(201).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// ATUALIZA UM DADO DO ITEM (PATCH) OU ELE INTEIRO (PUT)
app.patch("/users/:id", async (req, resp) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    resp.status(201).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// DELETANDO ITEM JSON
app.delete("users/:id", async (req, resp) => {
  const id = req.params.id;

  try {
    const user = UserModel.findByIdAndDelete(id);
    resp.status(200).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// INICIALIZANDO SERVIDOR NA WEB:
app.listen(port, () => {
  console.log(`servidor na porta ${port} está online`);
});
