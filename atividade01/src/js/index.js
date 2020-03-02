import CPFView from './view/CPFView';
import CNPJView from './view/CNPJView';

let cpfView = new CPFView();
let cnpjView = new CNPJView();

window.validarCPF = () => {

    cpfView.validarCPF();
}

window.validarCNPJ = () => {

    cnpjView.validarCNPJ();
}