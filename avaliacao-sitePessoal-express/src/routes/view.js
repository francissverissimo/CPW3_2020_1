import { Router } from 'express';

const router = Router();

/**
 * Criando a rota da página inicial
 */
router.get('/', (req, res) => res.render('index'));

/**
 * Criando a rota da página da biografia
 */
router.get('/bio', (req, res) => res.render('bio'));

/**
 * Criando a rota da página do portfólio
 */
router.get('/portfolio', (req, res) => res.render('portfolio'));

/**
 * Criando a rota da página do contato
 */
router.get('/contato', (req, res) => res.render('contato'));

export default router;