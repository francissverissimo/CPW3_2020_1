import express from 'express';
import path from 'path';

import rotasView from './routes/view';

const app = express();

/**
 * Configuração das páginas
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Configuração dos recursos estáticos
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Rotas de view
 */
app.use('/', rotasView);

export default app;