import { Sequelize } from '@sequelize/core';
import { MsSqlDialect } from '@sequelize/mssql';

export const sequelize = new Sequelize({
  dialect: MsSqlDialect,
  server: 'Administrator',
  port: 1433,
  database: 'database',
  authentication: {
    type: 'Database Engine',
    options: {
      userName: 'Administrator',
      password: process.env.DB_PASSWORD,
    },
  },
});