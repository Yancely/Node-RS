require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));


// Configuración global de rutas
app.use(require('./routes/index'));

 
mongoose.connect('mongodb://localhost:27017/cafe',
        {useNewUrlParser: true, useCreateIndex: true},
        (err, res) => {

      if(err) throw err;

      console.log('Base de datos Online');
      

});
 
app.listen(process.env.PORT , () => {
    console.log('Escuchando puerto: ', 3000);
    
});

module.exports = app;