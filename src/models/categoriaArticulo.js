import { DataTypes, Model } from 'sequelize';
import sequelize from '../contexts/mssql-sequelize.js';

class CategoriaArticulo extends Model {}

CategoriaArticulo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  modelName: 'CategoriaArticulo',
  freezeTableName: true
});

export default CategoriaArticulo;