document.addEventListener('DOMContentLoaded', function() {
    const campoAno = document.getElementById('campoAno');
    const botaoBuscar = document.getElementById('botaoBuscar');
    const areaFato = document.getElementById('areaFato');

    botaoBuscar.addEventListener('click', function() {
        const ano = campoAno.value;

        if (ano) {
            fetch(`http://localhost:8080/?ano=${ano}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('A resposta da rede não foi bem-sucedida');
                    }
                    return response.json();
                })
                .then(data => {
                    areaFato.textContent = data.Fato || 'Nenhum fato encontrado para este ano.';
                })
                .catch(error => {
                    console.error('Houve um problema ao buscar o fato:', error);
                    areaFato.textContent = 'Falha ao carregar o fato.';
                });
        } else {
            areaFato.textContent = 'Por favor, digite um ano.';
        }
    });
});