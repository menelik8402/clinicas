const mongoose = require('mongoose');
//requiero ahora el esquema de moongoose
const { Schema } = mongoose;

const PacienteSchema = new Schema({

    name: {type : String ,required :true},  
    lastName: { type : String, required : true},
    cedula : {type : String , required :true},
    genre : { type : String, required : true},
    address : {type : String ,required : true},
    deseases : {type : String,required :true},
   

});

module.exports=mongoose.model('c_pacient',PacienteSchema);



/*
*/