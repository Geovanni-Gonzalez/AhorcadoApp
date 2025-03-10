const mysql = require('mysql');
const { promisify } = require('util');
const config = require('./config');


const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,    
    password: config.db.password,
    database: config.db.database,
    multipleStatements: true,
    waitForConnections: true,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('❌ La conexión a la base de datos fue cerrada.');
        } else if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('❌ La base de datos tiene demasiadas conexiones.');
        } else if (err.code === 'ECONNREFUSED') {
            console.error('❌ La conexión a la base de datos fue rechazada.');
        } else {
            console.error('❌ Error desconocido en la conexión a MySQL:', err);
        }
        return;
    }

    if (connection) {
        console.log('✅ Conectado a la base de datos.');
        connection.release();
    }
});


pool.query = promisify(pool.query);
module.exports = pool;