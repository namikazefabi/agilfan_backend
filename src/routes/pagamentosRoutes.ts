import { Router } from 'express';
import PagamentoController from '../controllers/PagamentoController';

const router = Router();

router.get('/', PagamentoController.listarPagamentos);

export default router;
