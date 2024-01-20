const fs = require("fs");
const path = require("path");

// criar uma pasta
// .mkdir(caminho + nomeDoNovoDiretorio, callback: error)
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro ao criar o diretório: ", error);
  }
  console.log("pasta criada com sucesso");
});

// criar um arquivo (ou sobrescrever)
// .writeFile(path + novoArquivo, conteudoDoArquivo, callback: error)
fs.writeFile(path.join(__dirname, "/test", "test.html"), "kiplin!", (error) => {
  if (error) {
    return console.log("erro ao criar arquivo: ", error);
  }

  return console.log("arquivo criado com sucesso");
});

// adicionar conteudo a um arquivo
// .appendFile(path, conteudoAAcrescentar, callback: error)
fs.appendFile(
  path.join(__dirname, "/test", "test.html"),
  "prazer, me chamo João Miguel",
  (error) => {
    if (error) {
      return console.log("erro ao acrescentar conteudo ao arquivo: ", error);
    }
  }
);

// LER ARQUIVO
// .readFile(path, padraoAlfabetico [ex: utf-8], callback: error e data)
fs.readFile(
  path.join(__dirname, "/test", "test.html"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("não foi possível ler arquivo: ", error);
    }

    return console.log("arquivo lido com sucesso!", "\n", data);
  }
);

// Há alguns problemas acima, pq o WriteFile é uma função assincrona
// então há a possibilidade do readFile ser processado antes do appendFile, não lendo o arquivo por completo
// como resolver?
// basta colocar esses métodos dentro do callBack do writeFile, pra assim ser processado APÓS a finalização da função writeFile
// veja abaixo:

fs.writeFile(
  path.join(__dirname, "/test", "test.html"),
  "olá, muito prazer!",
  (error) => {
    if (error) {
      return console.log("erro ao criar arquivo: ", error);
    }

    fs.appendFile(
      path.join(__dirname, "/test", "test.html"),
      "prazer, me chamo João Miguel",
      (error) => {
        if (error) {
          return console.log(
            "erro ao acrescentar conteudo ao arquivo: ",
            error
          );
        }
      }
    );

    fs.readFile(
      path.join(__dirname, "/test", "test.html"),
      "utf8",
      (error, data) => {
        if (error) {
          console.log("erro na leitura", error);
        }
        console.log(data);
      }
    );
  }
);
