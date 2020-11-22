const Pacient = require ('../models/paciente')

const pacienteCtrl = {};

pacienteCtrl.getPacientes = async (req , res ) => {

   const todosPacientes = await Pacient.find();
 // todosPacientes = {"menelik" : "montano"}

   res.json(todosPacientes);

           
};

pacienteCtrl.savePaciente= async (req, res) => {
    const pasc = new ModelPacient(req.body);
    await pasc.save();
    
    res.json({
        'status' : 'Guardado'
    });
   

};

pacienteCtrl.getPacient= async (req, res ) => {
    const paciente = await ModelPacient.findById(req.params.id)
};

pacienteCtrl.updatePacient= function(){};

pacienteCtrl.deletePacient= function(){};

module.exports = pacienteCtrl;
