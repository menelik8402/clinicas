//Inicializando las rutas del modulo de agenda
const express = require('express');
const router = express.Router();

 const agenda = require ('../controllers/agend.controller');

//Rutas para gestionar los pacientes que asisten o se comunican con la clinica en el proceso agendar

router.get('/',agenda.getAgends);

router.post('/',agenda.createAgend);

router.get('/:id',agenda.getOneAgend);

router.put('/:id',agenda.updateAgend);

router.delete('/:id',agenda.deleteAgend);



module.exports=router;
