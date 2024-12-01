import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { Usuario } from './Usuario';
  import { Turma } from './Turma';
  
  @Entity('pagamentos')
  export class Pagamento {
    @PrimaryColumn({ name: 'id_pagamento' })
    idPagamento!: string;
  
    @Column({ type: 'int' })
    tipo!: number;
  
    @Column({ name: 'mes_ref', type: 'int' })
    mesRef!: number;
  
    @Column({ name: 'ano_ref', type: 'int' })
    anoRef!: number;
  
    @Column({ name: 'dt_venc', type: 'timestamp' })
    dtVenc!: Date;
  
    @Column({ name: 'dt_pgto', type: 'timestamp', nullable: true })
    dtPgto!: Date | null;
  
    @Column({ name: 'valor_a_pagar', type: 'float' })
    valorAPagar!: number;
  
    @Column({ name: 'valor_pago', type: 'float', nullable: true })
    valorPago!: number | null;
  
    @Column({ type: 'boolean' })
    situacao!: boolean;
  
    @ManyToOne(() => Usuario, (usuario) => usuario.pagamentos)
    @JoinColumn({ name: 'matricula' })
    usuario!: Usuario;
  
    @ManyToOne(() => Turma, (turma) => turma.pagamentos)
    @JoinColumn({ name: 'id_turma' })
    turma!: Turma;
  }
  