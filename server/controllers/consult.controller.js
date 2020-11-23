//requiero el modelo consulta
const Consult =require('../models/consult');

//inicializo el controlador de consulta
const consultCtrl={};

//Metodo que devuelve todaas las consultas de todos los pacientes
consultCtrl.getAllConsult= (req, res )=>{};

//Metodo que devuelve una consulta por Id
consultCtrl.getOneConsultById=(req, res )=>{};

//Metodo que devuelve una consulta por la celuda del paciente
consultCtrl.getOneConsultByPerson_Id=(req, res )=>{};

//Metodo que devuelve las consultas segun su estatus
consultCtrl.getConsultByStatus=(req, res )=>{};

//Metodo que devuelve todas las consultas que ha realizado un medico
consultCtrl.getConsultByDoc=(req, res )=>{};

//Metodo para insertar una consultanueva
consultCtrl.createConsult=(req, res )=>{};

//Metodo para consultas genericas 
consultCtrl.getConsultGeneric=(req, res)=>{};

//Metodo para consultas entre fechas
consultCtrl.getConsultBetDates=(req,res)=>{};

module.exports=consultCtrl;
