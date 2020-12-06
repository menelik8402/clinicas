//Inicializando las rutas 
const express = require('express');
const router = express.Router();

//requiriendo el controlador de consulta para poder usar sus metodos en las rutas
const consultController=require('../controllers/consult.controller');

//generando las rutas para el modelo consulta.
router.get('/',consultController.getAllConsults);
router.get('/:id',consultController.getOneConsultById);
router.get('/doc/:doc',consultController.getConsultByDoc);
router.get('/status/:status',consultController.getConsultByStatus);
router.get('/cedula/:personid',consultController.getOneConsultByPerson_Id);
router.post('/',consultController.createConsult);
router.get('/betdates/:startDate/:endDate',consultController.getConsultBetDates);
router.put('/:id',consultController.updateConsult);
router.delete('/:id',consultController.deleteConsult);


module.exports=router;
