import express, { Request, Response } from "express";
import { servicoBuscarFatoPorAno, servicoValidaAno } from "./servico.js";

const app = express();

app.get("/", (req, res) => {
  res.send("API para buscar fatos históricos por ano");
  const anoFato = req.query.ano as string;

  if (servicoValidaAno(anoFato)) {
    const fato = servicoBuscarFatoPorAno(anoFato);
    res.json(fato);
  } else {
    res.status(400).json({ erro: "Parâmetro ano inválido" });
  }
});

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
});