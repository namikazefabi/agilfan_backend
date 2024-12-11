

import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { Usuario } from '../models/Usuario';
import bcrypt from 'bcrypt'; 

class UsuarioService {
  private usuarioRepository: Repository<Usuario>;

  constructor() {
    this.usuarioRepository = AppDataSource.getRepository(Usuario);
  }

  
  public async listarUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  
  public async obterUsuario(matricula: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOneBy({ matricula });
  }

  
  public async criarUsuario(dados: Usuario): Promise<Usuario> {
    
    const usuarioExistente = await this.usuarioRepository.findOneBy({ matricula: dados.matricula });
    if (usuarioExistente) {
      throw new Error('Usuário já existe com esta matrícula.');
    }

    
    const saltRounds = 10;
    const senhaHashed = await bcrypt.hash(dados.password, saltRounds);
    dados.password = senhaHashed;

    const novoUsuario = this.usuarioRepository.create(dados);
    return this.usuarioRepository.save(novoUsuario);
  }

  
  public async atualizarUsuario(matricula: string, dados: Partial<Usuario>): Promise<Usuario | null> {
    const usuarioExistente = await this.usuarioRepository.findOneBy({ matricula });
    if (!usuarioExistente) {
      return null;
    }

    
    if (dados.password) {
      const saltRounds = 10;
      dados.password = await bcrypt.hash(dados.password, saltRounds);
    }

    Object.assign(usuarioExistente, dados);
    return this.usuarioRepository.save(usuarioExistente);
  }

  
  public async deletarUsuario(matricula: string): Promise<boolean> {
    const resultado = await this.usuarioRepository.delete({ matricula });
    return resultado.affected !== 0;
  }
}

export default new UsuarioService();
