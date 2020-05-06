class CopaView {

    constructor(campeoes) {

        this.controller = new CopaController(campeoes);
        this.renderizarCardsCampeoes(campeoes);
        this.renderizarTabelaCampeoes(campeoes);
    }

    renderizarTabelaCampeoes(campeoes) {

        let areaListagemCampeoes = document.getElementById('tabelaCopa');

        if (campeoes.length > 0) {

            // Cria a tabela
            let tabela = document.createElement('table');

            let cabecalho = this.criarCabecalhoTabela();
            // Adiciona o cabeçalho dentro da tabela
            tabela.appendChild(cabecalho);

            let corpoTabela = this.criarCorpoTabela(campeoes);
            // Adiciona o corpo da tabela na tabela
            tabela.appendChild(corpoTabela);

            // Adiciona a tabela na área de listagem
            areaListagemCampeoes.appendChild(tabela);
        }
    }

    criarCabecalhoTabela() {

        // Cria o cabeçalho da tabela
        let cabecalho = document.createElement('thead');

        let linhaCabecalho = document.createElement('tr');
        
        let colunaCampeao = document.createElement('th');
        colunaCampeao.innerText = 'Campeão';
        
        let colunaAno = document.createElement('th');
        colunaAno.innerText = 'Ano';
        
        let colunaTecnico = document.createElement('th');
        colunaTecnico.innerText = 'Técnico';
        
        let colunaVice = document.createElement('th');
        colunaVice.innerText = 'Vice-Campeão';

        // Adiciona as colunas na linha do cabeçalho
        linhaCabecalho.appendChild(colunaCampeao);
        linhaCabecalho.appendChild(colunaAno);
        linhaCabecalho.appendChild(colunaTecnico);
        linhaCabecalho.appendChild(colunaVice);

        // Adiciona a linha do cabeçalho no cabeçalho
        cabecalho.appendChild(linhaCabecalho);

        // Retorna o cabeçalho criado
        return cabecalho;
    }

    criarCorpoTabela(campeoes) {

        // Cria o corpo da tabela
        let corpoTabela = document.createElement('tbody');
        
        // Cria as linhas dos campeões mundiais
        for (let i = 0; i < campeoes.length; i++) {

            // Cria uma nova linha no corpo da tabela
            let linha = document.createElement('tr');

            let celulaCampeao = document.createElement('td');
            celulaCampeao.innerText = campeoes[i].campeao;
            linha.appendChild(celulaCampeao);
            
            let celulaAno = document.createElement('td');
            celulaAno.innerText = campeoes[i].ano;
            linha.appendChild(celulaAno);
            
            let celulaTecnico = document.createElement('td');
            celulaTecnico.innerText = campeoes[i].tecnico;
            linha.appendChild(celulaTecnico);
            
            let celulaVice = document.createElement('td');
            celulaVice.innerText = campeoes[i].vice;
            linha.appendChild(celulaVice);

            // Adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
        }

        return corpoTabela;
    }

    renderizarCardsCampeoes(campeoes) {
        let areaListagemCampeoes = document.getElementById('cardsCopa');

        if (campeoes.length > 0) {

            campeoes.forEach(function (copa) {
                
                let card = document.createElement('div');

                let inicialCampeao = document.createElement('span');
                inicialCampeao.innerText = copa.campeao.charAt(0);

                let campeao = document.createElement('span');

                let tamanhoCampeao = copa.campeao.length;
                campeao.innerText = copa.campeao.substr(1, tamanhoCampeao);

                let ano = document.createElement('span');
                ano.innerText = copa.ano;

                let tecnico = document.createElement('span');
                tecnico.innerText = copa.tecnico;

                let vice = document.createElement('span');
                vice.innerText = copa.vice;

                card.appendChild(inicialCampeao);
                card.appendChild(campeao);
                card.appendChild(ano);
                card.appendChild(tecnico);
                card.appendChild(vice);

                areaListagemCampeoes.appendChild(card);
            });
        }
    }
}