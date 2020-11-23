//Inicializando las rutas 
const express = require('express');
const router = express.Router();

//requiriendo el controlador de consulta para poder usar sus metodos en las rutas
const consultController=require('../controllers/consult.controller');

//generando las rutas para el modelo consulta.
router.get('/',consultController.getAllConsult);
router.get('/:id',consultController.getOneConsultById);
router.get('/:doc',consultController.getConsultByDoc);
router.get('/:status',consultController.getConsultByStatus);
router.get('/:personid',consultController.getOneConsultByPerson_Id);
router.post('/',consultController.createConsult);
router.get('/:generic',consultController.getConsultGeneric);
router.get('/:betdates',consultController.getConsultBetDates);

module.exports=router;
