const mongoose = require('mongoose');
//requiero ahora el esquema de moongoose
const { Schema } = mongoose;

const AgendSchema = new Schema({

    date_Agend: {type : String ,required :true},  
   
    cedula_Pac : {type : String , required :true},
    cedula_Doc : { type : String, required : true},
      

});

module.exports=mongoose.model('c_agend',AgendSchema);

