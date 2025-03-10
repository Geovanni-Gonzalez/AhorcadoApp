require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 3000, 
        env: process.env.APP_ENV || 'dev'

    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'Geovanny-11',
        database: process.env.DB_NAME || 'ahorcado_db'
    },
    secret: process.env.JWT_SECRET || 'miclavesecreta'
};

