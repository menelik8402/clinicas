const mongoose = require('mongoose');
//requiero el esquema de mongoose

const { Schema } = mongoose;

  const ConsultSchema =new Schema ({

    name : {type: String ,required : true},
    date :{type : Date , required : true},
    cedula : {type : String, required : true},
    status : {type : String , required : true},
    docs : {type : Array,required :true},
    diagnostic : {type : String, required :true},
    id_analisis_lab : {type :String, required : true},
    id_procedure : {type : String, required : true}

});
module.exports=mongoose.model('m_consult',ConsultSchema);