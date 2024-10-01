const { DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');


const Tarea = sequelize.define('Tarea',{
    ID_TAREA:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    TAREA: DataTypes.TEXT,
    TARE_FECHALIMITE: DataTypes.STRING,
   
},{
    tableName:'TAREAS',
    timestamps:false,
});

module.exports = Tarea;