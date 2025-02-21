import fatosHistoricos from "./fatos.js";

function servicoBuscarFatoPorAno(ano) {
  const fatoSelecionado = fatosHistoricos.find((fato) => fato.ano === ano);

  return fatoSelecionado;
}

exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;
