import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Pagamento } from './Pagamento';

@Entity('usuarios')
export class Usuario {
  @PrimaryColumn()
  matricula!: string;

  @Column()
  user!: string;

  @Column()
  password!: string;

  @Column()
  perfil!: string;

  @Column()
  nome!: string;

  @Column()
  endereco!: string;

  @Column()
  telefone!: string;

  @Column({ name: 'e_mail' })
  email!: string;

  @Column()
  cpf!: string;

  @Column({ name: 'pc_desconto', type: 'float' })
  pcDesconto!: number;

  @OneToMany(() => Pagamento, (pagamento) => pagamento.usuario)
  pagamentos!: Pagamento[];
}
