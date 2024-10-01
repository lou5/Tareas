const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');
// const dataTypes = require('sequelize-oracle/lib/data-types');


const Persona = sequelize.define('Persona',{
    ID_PERSONA:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: true,  // Permitimos que sea null en Sequelize para que el trigger lo maneje
        autoIncrement: false  
    },
    ID_TAREA:{
        type:DataTypes.INTEGER,
    },
   
    PERS_NOMBRECOMPLETO: DataTypes.STRING,
    PERS_EDAD: DataTypes.INTEGER,

},{
    tableName:'PERSONAS',
    timestamps:false,
});

module.exports = Persona;