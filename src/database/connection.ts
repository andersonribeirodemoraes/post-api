import knex from 'knex';
import databaseConfig from '../config/database';

const db = knex({
  client: 'mysql',
  connection: {
    host: databaseConfig.host,
    database: databaseConfig.database,
    user: databaseConfig.user,
    password: databaseConfig.password,
  },
  useNullAsDefault: true,
});

export default db;
