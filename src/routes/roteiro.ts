import { Router } from 'express'
import { RoteiroController } from '../controller/RoteiroController';
import { UsuarioController } from '../controller/UsuarioController';
import { Roteiro } from '../entity/Roteiro';

export const routerRoteiro = Router();
const roteiroCtrl = new RoteiroController();
const usuarioCtrl = new UsuarioController();

/**
 * Salvando um novo roteiro
 */
routerRoteiro.post('/', async(req,res) => {
  const  { idUsuario, lugar, descricao, data} = req.body;
  const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
  if (usuario) {
    const roteiro = new Roteiro(lugar, descricao, data, usuario);
    const roteiroSalvo = await roteiroCtrl.salvar(roteiro);
    res.json(roteiroSalvo);
  } else {
    res.status(404).json({ mensagem: 'Infelizmente, não encontramos o usuário'});
  }
});