const mongoose = require('mongoose');
//requiero el esquema de mongoose

const { Schema } = mongoose;

  const ConsultSchema =new Schema ({
    
    date :{type : Date , required : true},
    hour : {type : String, required : true},
    id_pacient : {type : String ,required : true},
    status : {type : String , required : true},
    docs : {type : Array,required :true}

});
module.exports=mongoose.model('m_consults',ConsultSchema);