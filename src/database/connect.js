const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@test.vv2xdc9.mongodb.net/?retryWrites=true&w=majority`;
// mongodb+srv://arlopes:<password>@test.vv2xdc9.mongodb.net/
const connectToDataBase = async () => {
  try {
    mongoose.connect(uri, {
      tls: true,
      tlsAllowInvalidCertificates: true,
    });
    console.log("Conexão com banco de dados finalizada com sucesso");
  } catch (error) {
    console.log("Erro ao conectar com banco de dados:", error);
  }
};

module.exports = connectToDataBase;
