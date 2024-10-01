const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');
const dataTypes = require('sequelize-oracle/lib/data-types');


const Habilidad = sequelize.define('Habilidad',{
    ID_HABILIDAD:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    ID_PERSONA:{
        type:DataTypes.INTEGER,
    },
   
    HABILIDAD: DataTypes.STRING,
    HABILI_CODIGO: DataTypes.STRING,
   
},{
    tableName:'HABILIDADES',
    timestamps:false,
});

module.exports = Habilidad;