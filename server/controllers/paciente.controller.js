const Pacient = require ('../models/paciente')

const pacienteCtrl = {};

pacienteCtrl.getPacientes = async (req , res ) => {

   const todosPacientes = await Pacient.find();
    res.json(todosPacientes);
          
};

pacienteCtrl.createPacient= async (req, res) => {
    const pasc = new Pacient(req.body);
    await pasc.save();
    
    res.json({
        'status' : 'Pacient saved'
    });
   

};

pacienteCtrl.getPacient= async (req, res ) => {
    //console.log(req.params);
    const getpacient = await Pacient.findById(req.params.id);
    res.json(getpacient);
};

pacienteCtrl.updatePacient= async(req,res)=>{
    const {id} =req.body;
    const updpacient ={    
           
                name : req.body.body,
                lastName : req.body.lastName,
                person_Id : req.body.person_Id,
                genre : req.body.genre,
                address :req.body.address,
                tel : req.body.tel,
                        
             work: {  
                     name_work:req.body.name_work ,
                     tel_work:req.body.tel_work,
                 address_work :req.body.address_work
               }	
           	

    }
    await Pacient.findByIdAndUpdate(id,{$set: updpacient},{new : true});
    res.json({'status' : 'Pacient Updated'});

};

pacienteCtrl.deletePacient= async (req,res) => {
  await Pacient.findByIdAndRemove(req.params.id);
res.json({'status':'Pacient delete'});


};

module.exports = pacienteCtrl;
