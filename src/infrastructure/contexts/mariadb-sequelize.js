import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('dbLaboratroy', 'nodeapi', 'Aa123456*', {
  host: 'localhost',
  dialect: 'mariadb',
});

export default sequelize;