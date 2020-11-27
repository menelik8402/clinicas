const Agend = require ('../models/agend')

const agendaCtrl = {};

agendaCtrl.getAgends = async (req , res ) => {

   const all_agends = await Agend.find();
    res.json(all_agends);
          
};

agendaCtrl.createAgend= async (req, res) => {
    const pasc = new Agend(req.body);
    await pasc.save();
    
    res.json({
        'status' : 'Agend saved'
    });
   

};

agendaCtrl.getOneAgend= async (req, res ) => {
    //console.log(req.params);
    const getagend = await Agend.findById(req.params.id);
    res.json(getagend);
};

agendaCtrl.updateAgend= async(req,res)=>{
    const {id} =req.body;
    const updagend ={    
           
                date_agend : req.body.date_Agend,
                cedula_Pac : req.body.cedula_Pac,
                cedula_Doc : req.body.cedula_Doc,
              
                        
                     	

    }
    await Agend.findByIdAndUpdate(id,{$set: updagend},{new : true});
    res.json({'status' : 'Agend Updated'});

};

agendaCtrl.deleteAgend= async (req,res) => {
  await Agend.findByIdAndRemove(req.params.id);
res.json({'status':'Agend delete'});


};

module.exports = agendaCtrl;
