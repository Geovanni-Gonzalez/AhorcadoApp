const express = require('express');
const rutaPalabra = require('./routes/rutaPalabra');
const rutaPartida = require('./routes/rutaPartida');
const rutaRonda = require('./routes/rutaRonda');
const config = require('./config');
const morgan = require('morgan');

const app = express();

app.use(morgan(config.app.env));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE', 'PATCH' );
        return res.status(200).json({});
    }
    next();
});

app.use('/palabra', rutaPalabra);
app.use('/partida', rutaPartida);
app.use('/ronda', rutaRonda);

app.listen(config.app.port, () => {
    console.log(`Server listening on port ${config.app.port}`);
});



