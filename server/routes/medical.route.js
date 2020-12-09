//inicializando rutas para el modelo de los Medicos
const express= require('express');
const router =express.Router();

//requiriendo el controlador de los medicos para poder  crear las rutas asociadas a la collections C_medicals

const medicalscontroller=require('../controllers/medical.controller');
 
//generando rutas
router.get('/',medicalscontroller.getAllMedicals);
router.get('/:id',medicalscontroller.getOneMedical);
router.put('/:id',medicalscontroller.updateMedical);
router.post('/',medicalscontroller.createMedical);
router.delete('/:id',medicalscontroller.deleteMedical);



module.exports=router;