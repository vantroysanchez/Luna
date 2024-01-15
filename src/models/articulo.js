import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';
import CategoriaArticulo from './categoriaArticulo.js';

class Articulo extends Model {}

Articulo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cantidadEnStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
}, {
  sequelize,
  modelName: 'Articulo',
});

Articulo.belongsTo(CategoriaArticulo, { foreignKey: 'categoriaId' });

export default Articulo;