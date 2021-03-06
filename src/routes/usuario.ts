import { Router } from 'express'
import { UsuarioController } from '../controller/UsuarioController';
import { Usuario } from '../entity/Usuario';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

/**
 * Salvando um novo usuário
 */
routerUsuario.post('/', async (req,res) => {
  const {nome, email} = req.body;
  const usuario = new Usuario(nome, email);
  const usuarioSalvo = await usuarioCtrl.salvar(usuario);
  res.json(usuarioSalvo);
});

/**
 *  Listando todos os usuários
 */
routerUsuario.get('/', async (req, res) => {
  const usuarios = await usuarioCtrl.recuperarTodos();
  res.json(usuarios);
});

/**
 * Listar os roteiros de um determinado usuário
 */
routerUsuario.get('/roteiros/:id', async (req, res) => {
  const  id  = parseInt(req.params.id);
  const roteiros = await usuarioCtrl.recuperarRoteirosDoUsuario(id);
  res.json(roteiros);
});