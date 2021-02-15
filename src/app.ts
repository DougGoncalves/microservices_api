import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as logger from 'morgan'

import { conectarServidorNoBD } from './config/db'
import { routerUsuario } from './routes/usuario'

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso por meio do CORS
 */
app.use(cors());

/**
 * Permite receber e enviar arquivos do tipo JSON
 */
app.use(bodyParser.json());

/**
 * Configura os logs da aplicação
 */
app.use(logger('dev'));

/**
 * Conecta ao BD
 */
conectarServidorNoBD();

/**
 * Configuração de rotas
 */
app.use('/usuario', routerUsuario);
app.use('/', (req,res) => res.send('API para trabalho de Microservices FIAP 36SCJ'))