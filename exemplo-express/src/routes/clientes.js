import { Router } from 'express';

import ClienteController from '../controllers/ClienteController';

const router = Router();
const clienteCtrl = new ClienteController();

/**
 * Criando a rota da página de clientes
 */
router.get('/', (req, res) => {
    const clientes = clienteCtrl.recuperarTodos();
    res.render('clientes', { clientes })
});

/**
 * Criando a rotas para salvar um novo cliente
 */
router.post('/', (req, res) => {
    const cliente = req.body;
    clienteCtrl.salvar(cliente);
    res.redirect('/clientes');
});

export default router;