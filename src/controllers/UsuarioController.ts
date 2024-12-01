import { Request, Response } from 'express';
import UsuarioService from '../services/UsuarioService';

class UsuarioController {
  static async listarUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await UsuarioService.listarUsuarios();
      res.json(usuarios);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao listar usuários', error: error.message });
    }
  }

  static async obterUsuario(req: Request, res: Response) {
    try {
      const { matricula } = req.params;
      const usuario = await UsuarioService.obterUsuario(matricula);
      if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      res.json(usuario);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao obter usuário', error: error.message });
    }
  }

  static async criarUsuario(req: Request, res: Response) {
    try {
      const usuario = await UsuarioService.criarUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  static async atualizarUsuario(req: Request, res: Response) {
    try {
      const { matricula } = req.params;
      const usuarioAtualizado = await UsuarioService.atualizarUsuario(matricula, req.body);
      if (!usuarioAtualizado) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      res.json(usuarioAtualizado);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  static async deletarUsuario(req: Request, res: Response) {
    try {
      const { matricula } = req.params;
      const sucesso = await UsuarioService.deletarUsuario(matricula);
      if (!sucesso) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao deletar usuário', error: error.message });
    }
  }
}

export default UsuarioController;
