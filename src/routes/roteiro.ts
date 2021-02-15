import { Router } from 'express'
import { RoteiroController } from '../controller/RoteiroController';
import { UsuarioController } from '../controller/UsuarioController';

const routerRoteiro = Router();
const roteiroCtrl = new RoteiroController();
const usuarioCtrl = new UsuarioController();

/**
 * Salvando um novo roteiro
 */
routerRoteiro.post('/', async(req,res) => {
  const  { idUsuario, lugar, descricao, data} = req.body;
  const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
  if (usuario) {
    
  } else {

  }
});