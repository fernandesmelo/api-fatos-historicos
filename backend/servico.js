import fatosHistoricos from "./fatos.js";

function servicoValidaAno(ano) {
  if (isNaN(ano)) {
    return false;
  } else {
    if (ano >= 1920 && ano <= 2020) {
      return true;
    } else {
      return false;
    }
  }
}

function servicoBuscarFatoPorAno(ano) {
  const fatoSelecionado = fatosHistoricos.find((fato) => fato.Ano === ano);

  return fatoSelecionado;
}

export { servicoBuscarFatoPorAno, servicoValidaAno };
