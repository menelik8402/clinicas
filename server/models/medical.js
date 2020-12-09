const mongoose = require('mongoose');
//requiero ahora el esquema de moongoose
const { Schema } = mongoose;

const MedicalShema = new Schema({

    name: {type : String ,required :true},  
    lastName: { type : String, required : true},
    cedula : {type : String , required :true},
    speciality : { type : String, required : true},
    yearOfGr : {type : Date ,required : true},
    telephone : {type : String,required :true},
   

});

module.exports=mongoose.model('c_medical',MedicalShema);

