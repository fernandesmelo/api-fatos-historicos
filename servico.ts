import fatosHistoricos from "./fatos.js";

function servicoValidaAno(ano: any): boolean {
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

function servicoBuscarFatoPorAno(ano: string): typeof fatosHistoricos[number] | undefined {
  const fatoSelecionado = fatosHistoricos.find((fato) => fato.Ano === ano);

  return fatoSelecionado;
}

export { servicoBuscarFatoPorAno, servicoValidaAno };