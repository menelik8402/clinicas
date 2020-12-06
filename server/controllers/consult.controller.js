//requiero el modelo consulta
const Consult =require('../models/consult');

//inicializo el controlador de consulta
const consultCtrl={};

//Metodo que devuelve todaas las consultas de todos los pacientes
consultCtrl.getAllConsults= async (req, res )=>{

    const all_consults = await Consult.find();

    res.json(all_consults);


};

//Metodo que devuelve una consulta por Id
consultCtrl.getOneConsultById= async (req, res )=>{

    const getConultById = await Consult.findById(req.params.id);
    res.json(getConultById.date);
   // res.json(req.params);
};

//Metodo que devuelve una consulta por la cedula del paciente
consultCtrl.getOneConsultByPerson_Id= async (req, res )=>{

    const getConult = await Consult.find({'cedula': req.params.personid});
    res.json(getConult);
};

//Metodo que devuelve las consultas segun su estatus
consultCtrl.getConsultByStatus= async (req, res )=>{

    const getConult = await Consult.find({'status':req.params.status});
    res.json(getConult);
};

//Metodo que devuelve todas las consultas que ha realizado un medico
consultCtrl.getConsultByDoc= async (req, res )=>{

    const getConult = await Consult.find({'docs':req.params.doc});
    res.json(getConult);
};

//Metodo para insertar una consulta nueva
consultCtrl.createConsult= async (req, res )=>{
    const query= new Consult (req.body);
    await query.save();

    res.json({'status':'Consult created'});
    
};

//Metodo para consultas entre fechas
consultCtrl.getConsultBetDates= async (req,res)=>{
 //selecciono las fechas inicial y final

 const { startDate,endDate } = req.params;
 


  const consultsbydates = await Consult.find({
      "m_consults.date":{ $gte : startDate},
      "m_consults.date":{ $lte : endDate } 
  })     


  res.json(consultsbydates);


};

//metodo par a actualizar una consulta
consultCtrl.updateConsult= async (req,res)=> {
   //seleciono de todo lo que viene en la peticion solamente el id
   const { id } =req.params;
   //creo el objeto actualizado
   const updatconsult= {
    name : req.body.name,
   date :req.body.date,
   cedula : req.body.cedula,
   status : req.body.status,
   docs : req.body.docs,
   diagnostic : req.body.diagnostic,
   id_analisis_lab : req.body.id_analisis_lab,
   id_procedure : req.body.id_procedure

   }
   await Consult.findByIdAndUpdate(id,{$set: updatconsult },{new : true})
   res.json({'status' : 'Consult Updated'});
};

//Metod para eliminar una consulta
consultCtrl.deleteConsult=async(req,res)=>{
    await Consult.findByIdAndRemove(req.params.id);
    res.json({'status':'Consult Deleted'});
};

module.exports=consultCtrl;
