import { Request, Response } from 'express';
import PagamentoService from '../services/PagamentoService';

class PagamentoController {
  static async listarPagamentos(req: Request, res: Response) {
    try {
      const pagamentos = await PagamentoService.listarPagamentos();
      res.json(pagamentos);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao listar pagamentos', error: error.message });
    }
  }

  static async obterPagamento(req: Request, res: Response) {
    try {
      const { idPagamento } = req.params;
      const pagamento = await PagamentoService.obterPagamento(idPagamento);
      if (!pagamento) {
        return res.status(404).json({ mensagem: 'Pagamento não encontrado' });
      }
      res.json(pagamento);
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao obter pagamento', error: error.message });
    }
  }

  static async criarPagamento(req: Request, res: Response) {
    try {
      const pagamento = await PagamentoService.criarPagamento(req.body);
      res.status(201).json(pagamento);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  static async atualizarPagamento(req: Request, res: Response) {
    try {
      const { idPagamento } = req.params;
      const pagamentoAtualizado = await PagamentoService.atualizarPagamento(idPagamento, req.body);
      if (!pagamentoAtualizado) {
        return res.status(404).json({ mensagem: 'Pagamento não encontrado' });
      }
      res.json(pagamentoAtualizado);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  static async deletarPagamento(req: Request, res: Response) {
    try {
      const { idPagamento } = req.params;
      const sucesso = await PagamentoService.deletarPagamento(idPagamento);
      if (!sucesso) {
        return res.status(404).json({ mensagem: 'Pagamento não encontrado' });
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ mensagem: 'Erro ao deletar pagamento', error: error.message });
    }
  }
}

export default PagamentoController;
