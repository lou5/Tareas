const { QueryTypes } = require('sequelize');
const Tarea = require('../models/tareas');
const Persona = require('../models/personas');
const sequelize = require('../databases/sequelize');

async function crearTarea(tareaData, personaData){
    const transaction = await sequelize.transaction();
    try{
        // Obtener el siguiente valor de la secuencia para la tarea
        const resultTarea = await sequelize.query('SELECT SEQUENCE.CURRENT_VALUE + 1 AS nextValue FROM SEQUENCE WHERE NAME = \'PQR_NUMERORADICADO_SEQ\' FOR UPDATE', {
            type: QueryTypes.SELECT,
            transaction  
        });
        const nextTareaValue = resultTarea[0].NEXTVALUE;

        await sequelize.query('UPDATE SEQUENCE SET CURRENT_VALUE = CURRENT_VALUE + 1 WHERE NAME = \'PQR_NUMERORADICADO_SEQ\'', {
            type: QueryTypes.UPDATE,
            transaction  
        });

        // Crear la tarea
        const tarea = await Tarea.create({
            ...tareaData,
            ID_TAREA: nextTareaValue
        }, { transaction });

        // Crear la persona asociada (sin especificar el ID_PERSONA)
        const persona = await Persona.create({
            ...personaData,
            ID_TAREA: tarea.ID_TAREA
        }, { transaction });

        await transaction.commit();

        return { tarea, persona };
    } catch (error) {
        await transaction.rollback();
        console.error('Error en la transacción:', error);
        throw error;
    }
}

async function buscar(nombreTarea, fechaInicial, fechaFinal){
    try {
        let whereClause = {};

        if (fechaInicial && fechaFinal) {
            whereClause.TARE_FECHALIMITE = {
                [Op.between]: [fechaInicial, fechaFinal]
            };
        }
        if (nombreTarea) {
            whereClause.TAREA = nombreTarea;
        
        }
       
        const resultados = await Tarea.findAll({
            where: whereClause,
            include: [{
                model: Persona,
                as: 'Personas',
                required: true,
            },
        
            ]
        });
        // console.log('Número de resultados de la consulta:', resultados.length);

        const respuestaJSON = resultados.map(item => item.toJSON());
        const resultado = respuestaJSON.map(item => {

            return {
                Tarea: {
                    ID_TAREA: item.ID_TAREA,
                    TAREA: item.TAREA,
                    TARE_FECHALIMITE: item.TARE_FECHALIMITE,
                    
                },
                Persona: {
                    ID_PERSONA: item.ID_USUARIO,
                    ID_TAREA: item.Usuario.ID_ZONA,
                    // 
                    PERS_NOMBRECOMPLETO: item.Usuario.USU_NOMBREUNO,
                    PERS_EDAD: item.Usuario.USU_NOMBREDOS,
                   
                }
            };
        });
        // console.log('Número de resultados:', resultado.length);
        if(Object.keys(whereClause).length > 0){
            // console.log('resultado1....', resultado);
            return resultado
            
        }         
        else if(Object.keys(includeConditions).length > 0){
            // console.log('includeConditions....', includeConditions);
            // console.log('resultado2....', resultado);
            return resultado
            
        } else if(Object.keys(whereClause).length === 0){
            // const res = await obtener()
            return res
            
        }
        // return (resultado)
    } catch (err) {
        console.error('Error al obtener PQR por radicado:', err);
        throw err;
    }
}

module.exports = {
    crearTarea,
    buscar
}