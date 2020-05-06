import CPFController from '../controller/CPFController';

export default class CPFView {

    constructor() {
        this.controller = new CPFController();

        this.$ = document.querySelector.bind(document);
    }

    validarCPF() {

        let cpf = this.$('#numero').value;

        if (cpf == '') {
            this.$('#resposta').innerText = '';
        } else {
            this.exibirValidacao(this.controller.validacaoCPF(cpf));
        }
    }

    exibirValidacao(resultado) {

        if (resultado) {
            this.$('#resposta').innerText = 'Ok, CPF Válido';
        } else {
            this.$('#resposta').innerText = 'CPF Inválido';
        }
    }
}