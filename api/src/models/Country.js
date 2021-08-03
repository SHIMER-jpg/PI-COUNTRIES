const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      primaryKey:true,
      allowNull:false,
      unique:true,
      validate:{
        len:[3]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true,
      }
    },
    continent:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
      }
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.DOUBLE,
      validate:{
        isNumeric:true
      }
    },
    population:{
      type: DataTypes.DOUBLE,
      validate:{
        isNumeric:true
      }
    },
  });
};
