const mongoose = require('mongoose');
//requiero ahora el esquema de moongoose
const { Schema } = mongoose;

const MedicalShema = new Schema({

    name: {type : String ,required :true},  
    lastName: { type : String, required : true},
    person_Id : {type : String , required :true},
    speciality : { type : String, required : true},
    yearOfGr : {type : Date ,required : true},
    tel : {type : String,required :true},
    university:{type : String, required : true}
    

});

module.exports=mongoose.model('c_medicals',MedicalShema);

