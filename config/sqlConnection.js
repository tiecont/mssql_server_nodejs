import { Sequelize } from '@sequelize/core';
import { MsSqlDialect } from '@sequelize/mssql';

const sequelize = new Sequelize({
  dialect: 'mssql',
    server: 'admin-pc',
    dialectModulePath: 'sequelize-msnodesqlv8',
    dialectOptions: {
        connectionString: 'Data Source=Admin-PC;Initial Catalog=Tiecont_Server;Integrated Security=True;Trust Server Certificate=True'
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('connected...')
    })
    .catch(err => console.log(err))
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.products = require('./products')(sequelize, DataTypes)
db.user = require('./user')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('connected to SSMS')
    })

export default db