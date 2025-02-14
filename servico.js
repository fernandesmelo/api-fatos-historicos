import fatosHistoricos from './fatos.js';

function servicoBuscarFatoPorAno(ano) {
    let fatoSelecionado = fatosHistoricos.find(fato => {
        return fato.Ano == ano;
    });

    return fatoSelecionado.Fato;
}

exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;