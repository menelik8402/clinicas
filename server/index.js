const express = require('express');
const app = express();
//requerimos del archivo datebase.js laconexion nada mas
const { mongoose } =require('./database');

// nos ayuda a ver por consola lo que el usuario nos esta pidiendo
const morgan = require('morgan');

// Settings
// variable que seran accedidas desde cualquier parte de la app, es como crear una variable
app.set('port',process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));

// esto permite configurar al server para comprender formto Json
app.use(express.json());

// Routes
app.use('/api/agendar/pacientes',require('./routes/pacient.route'));
app.use('/api/agendar/consultas',require('./routes/consult.route'));
app.use('/api/agendar/medicos',require('./routes/medical.route'));
app.use('/api/agendar/agend',require('./routes/agenda.route'));

app.listen(app.get('port'),()=>{
      console.log('server on port',app.get('port'))
});
