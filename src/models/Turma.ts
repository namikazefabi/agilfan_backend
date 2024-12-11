import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Pagamento } from './Pagamento';

@Entity('turmas')
export class Turma {
  @PrimaryColumn({ name: 'id_turma' })
  idTurma!: string;

  @Column()
  curso!: string;

  @Column()
  turno!: string;

  @Column({ name: 'ano_ref', type: 'int' })
  anoRef!: number;

  @Column({ name: 'semestre_ref', type: 'int' })
  semestreRef!: number;

  @Column({ name: 'valor_face', type: 'float' })
  valorFace!: number;

  @OneToMany(() => Pagamento, (pagamento) => pagamento.turma)
  pagamentos!: Pagamento[];
}
