import { DataSource } from 'typeorm';
import { Turma } from './entity/Turma';
import { Pagamento } from './entity/Pagamento';
import { Usuario } from './entity/Usuario';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'agilfan',
  synchronize: true,
  logging: false,
  entities: [Usuario, Turma, Pagamento],
  migrations: [__dirname + '/migration/**/*.ts'],
  subscribers: [__dirname + '/subscriber/**/*.ts'],
});
