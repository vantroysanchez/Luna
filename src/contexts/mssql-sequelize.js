import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('dbLuna', 'sa', 'A123456*', {
  host: 'localhost',
  dialect: 'mssql'
});

export default sequelize;