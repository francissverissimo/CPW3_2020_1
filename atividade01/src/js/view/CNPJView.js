import CNPJController from '../controller/CNPJControlller';

export default class CNPJView {

    constructor() {

        this.controller = new CNPJController();

        this.$ = document.querySelector.bind(document);
    }

    validarCNPJ() {

        let cnpj = this.$('#numero').value;

        if (cnpj == '') {
            this.$('#resposta').innerText = '';
        } else {
            this.exibirValidacao(this.controller.validacaoCNPJ(cnpj));
        }
    }

    exibirValidacao(resultado) {

        if (resultado) {
            this.$('#resposta').innerText = 'Ok, CNPJ Válido';
        } else {
            this.$('#resposta').innerText = 'CNPJ Inválido';
        }
    }
}