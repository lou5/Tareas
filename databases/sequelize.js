const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  username: 'db_proyecto',
  password: 'proyecto123',
  database: 'orcl.bbrouter',
  host: 'localhost',
  dialect: 'oracle',
  dialectOptions: {
    connectString: 'localhost:1521/orcl.bbrouter',
  },
  logging:false
  // logging: console.log,
});

module.exports = sequelize;