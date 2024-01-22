const mongoose = require("mongoose");
// criação de um esqueleto com os dados
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
