import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { Pagamento } from '../models/Pagamento';

class PagamentoService {
  private pagamentoRepository: Repository<Pagamento>;

  constructor() {
    this.pagamentoRepository = AppDataSource.getRepository(Pagamento);
  }

  public async listarPagamentos(): Promise<Pagamento[]> {
    return this.pagamentoRepository.find({ relations: ['usuario', 'turma'] });
  }

  public async obterPagamento(idPagamento: string): Promise<Pagamento | null> {
    return this.pagamentoRepository.findOne({
      where: { idPagamento },
      relations: ['usuario', 'turma'],
    });
  }

  public async criarPagamento(dados: Pagamento): Promise<Pagamento> {
    const pagamentoExistente = await this.pagamentoRepository.findOneBy({ idPagamento: dados.idPagamento });
    if (pagamentoExistente) {
      throw new Error('Pagamento já existe com este ID.');
    }
    const novoPagamento = this.pagamentoRepository.create(dados);
    return this.pagamentoRepository.save(novoPagamento);
  }

  public async atualizarPagamento(idPagamento: string, dados: Partial<Pagamento>): Promise<Pagamento | null> {
    const pagamentoExistente = await this.pagamentoRepository.findOneBy({ idPagamento });
    if (!pagamentoExistente) {
      return null;
    }
    Object.assign(pagamentoExistente, dados);
    return this.pagamentoRepository.save(pagamentoExistente);
  }

  public async deletarPagamento(idPagamento: string): Promise<boolean> {
    const resultado = await this.pagamentoRepository.delete({ idPagamento });
    return resultado.affected !== 0;
  }
}

export default new PagamentoService();
