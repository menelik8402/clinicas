//declaro una variable para gestironar la base de datos
const mongoose=require ('mongoose');

//direccion de mi base de datos
const URI='mongodb://localhost/clinica'

//conectando la base de datos
mongoose.connect(URI,{ useNewUrlParser: true , useUnifiedTopology: true } )
        .then(db=> console.log('DB is conected'))
        .catch (err => console.error(err));

//EXPORTANDO LA CONEXXION
module.exports=mongoose;