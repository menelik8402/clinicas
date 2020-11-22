const mongoose = require('mongoose');
//requiero ahora el esquema de moongoose
const { Schema } = mongoose;

const PacienteSchema = new Schema({

    name: {type : String ,required :true},  
    lastName: { type : String, required : true},
    person_Id : {type : String , required :true},
    genre : { type : String, required : true},
    address : {type : String ,required : true},
    tel : {type : String,required :true},
    work : {
        name_work :{ type :String,required :true},
        tel_work :{type : String ,required : true},
        address_work : {type :String,required:true}
    }

});

module.exports=mongoose.model('m_pacientes',PacienteSchema);



/*
*/