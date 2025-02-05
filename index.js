import express from 'express';
import { servicoBuscarFatoPorAno } from './servicos/fatos.js';

const app = express();

app.get('/', (req, res) => {
    let anoFato = req.query.ano;

    let fato = servicoBuscarFatoPorAno(anoFato);

    res.json({ano:fato});
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
})

