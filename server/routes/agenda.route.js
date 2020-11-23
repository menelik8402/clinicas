//Inicializando las rutas del modulo de agenda
const express = require('express');
const router = express.Router();

 const paciente = require ('../controllers/paciente.controller');

//Rutas para gestionar los pacientes que a sisten o se comunican con la clinica en el proceso agendar

router.get('/',paciente.getPacientes);

router.post('/',paciente.createPacient);

router.get('/:id',paciente.getPacient);

router.put('/:id',paciente.updatePacient);

router.delete('/:id',paciente.deletePacient);



module.exports=router;
