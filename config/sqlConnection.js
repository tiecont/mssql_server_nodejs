import { Sequelize } from '@sequelize/core';
import { MsSqlDialect } from '@sequelize/mssql';

export const sequelize = new Sequelize({
  dialect: 'mssql',
    server: 'admin-pc',
    dialectModulePath: 'sequelize-msnodesqlv8',
    dialectOptions: {
        connectionString: 'Data Source=Admin-PC;Initial Catalog=Tiecont_Server;Integrated Security=True;Trust Server Certificate=True'
    }
});