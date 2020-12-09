//requiero el modelo de los medicos 
const Medical = require('../models/medical');

//declarando la variable que hace funcion de controlador
const medicalCtrl={};

//Ddeclarando los metodos para este controlador

medicalCtrl.getAllMedicals = async (req , res ) => {

   const allMedicals = await Medical.find();
   res.json(allMedicals);
    
           
 };
 
 medicalCtrl.createMedical= async (req, res) => {
     
    const med = new Medical(req.body);
    await med.save();
    
    res.json({
        'status' : 'Medical saved'
    });
 
 };
 
 medicalCtrl.getOneMedical= async (req, res ) => {
    const getmedical = await Medical.findById(req.params.id);
    res.json(getmedical);
 };
 
 medicalCtrl.updateMedical= async(req,res)=>{
     const { id } =req.params;

     const updmed={
        name : req.body.name,
        lastName : req.body.lastName,
        cedula : req.body.cedula,
        speciality : req.body.speciality,
        yearOfGr : req.body.yearOfGr,
        telephone : req.body.telephone
     }

     await Medical.findByIdAndUpdate(id,{$set: updmed},{new : true});
     res.json('Medical updated');

 
 };
 
 medicalCtrl.deleteMedical= async (req,res) => {
   await Medical.findByIdAndRemove(req.params.id);
 res.json({'status':'Medical deleted'});
 
 
 };
 
 module.exports = medicalCtrl;
 
