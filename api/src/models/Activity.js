const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement: true,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    isAutumn:{
      type: DataTypes.BOOLEAN,
    },
    isWinter:{
      type: DataTypes.BOOLEAN,
    },
    isSpring:{
      type: DataTypes.BOOLEAN,
    },
    isSummer:{
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.STRING,
      content: sequelize.TEXT,
    },
  });
};
