import faker from 'faker';

export default class ClienteController {

    constructor() {
        this.clientes = [];
        const QTDE_CLIENTES = 100;
        for (let i = 0; )
    }

    recuperarTodos() {
        return this.clientes;
    }

    salvar(cliente) {
        this.clientes.push(cliente);
    }
}