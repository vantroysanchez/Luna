import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('dbLuna', 'sa', 'Aa123456*', {
  host: 'localhost',
  dialect: 'mssql',
  timezone: false,
  dialectOptions: {
    options: {
      useUTC: true,
    }
  }
});

export default sequelize;