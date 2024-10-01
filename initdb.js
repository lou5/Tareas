const sequelize = require('./databases/sequelize'); 

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión con la base de datos establecida con éxito.');

    await sequelize.sync(); 
    console.log('Todos los modelos fueron sincronizados con éxito.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    throw error;
  }
}

module.exports = initializeDatabase;