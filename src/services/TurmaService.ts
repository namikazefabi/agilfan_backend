import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { Turma } from '../entity/Turma';

class TurmaService {
  private turmaRepository: Repository<Turma>;

  constructor() {
    this.turmaRepository = AppDataSource.getRepository(Turma);
  }

  public async listarTurmas(): Promise<Turma[]> {
    return this.turmaRepository.find();
  }

  public async obterTurma(idTurma: string): Promise<Turma | null> {
    return this.turmaRepository.findOneBy({ idTurma });
  }

  public async criarTurma(dados: Turma): Promise<Turma> {
    const turmaExistente = await this.turmaRepository.findOneBy({ idTurma: dados.idTurma });
    if (turmaExistente) {
      throw new Error('Turma já existe com este ID.');
    }
    const novaTurma = this.turmaRepository.create(dados);
    return this.turmaRepository.save(novaTurma);
  }

  public async atualizarTurma(idTurma: string, dados: Partial<Turma>): Promise<Turma | null> {
    const turmaExistente = await this.turmaRepository.findOneBy({ idTurma });
    if (!turmaExistente) {
      return null;
    }
    Object.assign(turmaExistente, dados);
    return this.turmaRepository.save(turmaExistente);
  }

  public async deletarTurma(idTurma: string): Promise<boolean> {
    const resultado = await this.turmaRepository.delete({ idTurma });
    return resultado.affected !== 0;
  }
}

export default new TurmaService();
