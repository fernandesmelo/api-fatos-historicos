import express from "express";
import { servicoBuscarFatoPorAno, servicoValidaAno } from "./servico.js";

const app = express();

const publicpath = path.join(__dirname, "./public";

app.get("/", (req, res) => {
  res.sendFile(path.join(publicpath, "/index.html");
  let anoFato = req.query.ano;

  if (servicoValidaAno(anoFato)) {
    let fato = servicoBuscarFatoPorAno(anoFato);
    res.json(fato);
  } else {
    res.status(400).json({ erro: "Parâmetro ano inválido" });
  }
});

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
});
