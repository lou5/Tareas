const Tarea = require('./tareas');
const Persona = require('./personas');
const Habilidad = require('./habilidades');
const Habilidad = require('./habilidades');

// PERSONA - Tarea (Many to One)
Persona.belongsTo(Tarea, {
    foreignKey: 'ID_TAREA',
    as: 'Tareas'
  });
  Tarea.hasMany(Persona, {
    foreignKey: 'ID_TAREA',
    as: 'Personas'
  });

// HABILIDADES - Personas (Many to One)
 Habilidad.belongsTo(Persona,{
    foreignKey:'ID_PERSONA',
    as:'Personas'
 });
 Persona.hasMany(Habilidad,{
    foreignKey:'ID_PERSONA',
    as:'Habilidades'
 }) 



