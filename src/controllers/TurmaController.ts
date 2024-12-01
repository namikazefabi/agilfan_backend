import { Request, Response } from 'express';
import TurmaService from '../services/TurmaService';

class TurmaController {
  static async listarTurmas(req: Request, res: Response) {
    try {
      const turmas = await TurmaService.listarTurmas();
      res.json(turmas);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao listar turmas', error: error.message });
    }
  }

  static async obterTurma(req: Request, res: Response) {
    try {
      const { idTurma } = req.params;
      const turma = await TurmaService.obterTurma(idTurma);
      if (!turma) {
        return res.status(404).json({ mensagem: 'Turma não encontrada' });
      }
      res.json(turma);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao obter turma', error: error.message });
    }
  }

  static async criarTurma(req: Request, res: Response) {
    try {
      const turma = await TurmaService.criarTurma(req.body);
      res.status(201).json(turma);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  static async atualizarTurma(req: Request, res: Response) {
    try {
      const { idTurma } = req.params;
      const turmaAtualizada = await TurmaService.atualizarTurma(idTurma, req.body);
      if (!turmaAtualizada) {
        return res.status(404).json({ mensagem: 'Turma não encontrada' });
      }
      res.json(turmaAtualizada);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  static async deletarTurma(req: Request, res: Response) {
    try {
      const { idTurma } = req.params;
      const sucesso = await TurmaService.deletarTurma(idTurma);
      if (!sucesso) {
        return res.status(404).json({ mensagem: 'Turma não encontrada' });
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao deletar turma', error: error.message });
    }
  }
}

export default TurmaController;
