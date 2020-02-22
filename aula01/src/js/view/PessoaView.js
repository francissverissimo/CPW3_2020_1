import Pessoa from '../model/Pessoa';
import PessoaController from '../controller/PessoaController';

export default class PessoaView {

    constructor() {
        this.controller = new PessoaController();

        // Seletor de elementos da página 
        this.$ = document.querySelector.bind(document);
    }

    calcularIMC() {
        // Pega os valores de peso e altura do formulário
        let peso = this.$('#peso').value;
        let altura = this.$('#altura').value;

        // Instancia (cria) o objeto de pessoa
        let pessoa = new pessoa(peso, altura);

        // Invoca o controller para calcular o valor de IMC da pessoa
        let imc = this.controller.calcularIMC(pessoa);
        this.exibirIMC(imc);
    }

    exibirIMC(imc) {
        let resultado = `O seu IMC é ${imc.toFixed(1)}`; 
        this.$(`#resultado`).innerText = resultado;
    }
}