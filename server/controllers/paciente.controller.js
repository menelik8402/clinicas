const Pacient = require ('../models/paciente')

const pacienteCtrl = {};

pacienteCtrl.getPacients = async (req , res ) => {

   const todosPacientes = await Pacient.find();
    res.json(todosPacientes);
          
};

pacienteCtrl.createPacient=  async (req, res) => {
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
    const {id} =req.params;
    const updpacient ={    
           
                name : req.body.name,
                lastName : req.body.lastName,
                cedula : req.body.cedula,
                genre : req.body.genre,
                address :req.body.address,
                deseases : req.body.deseases                        
                     	

    }
    await Pacient.findByIdAndUpdate(id,{$set: updpacient},{new : true});
    res.json({'status' : 'Pacient Updated'});

};

pacienteCtrl.deletePacient= async (req,res) => {
  await Pacient.findByIdAndRemove(req.params.id);
res.json({'status':'Pacient delete'});


};

module.exports = pacienteCtrl;
