const oracledb = require('oracledb');

async function getConnection(){
    return await oracledb.getConnection({
        user:'db_proyecto',
        password:'proyecto123',
        connectString:'localhost:1521/orcl.bbrouter',
    });
}

module.exports = {getConnection};