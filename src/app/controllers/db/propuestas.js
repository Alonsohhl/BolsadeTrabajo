

var mongoose_con = require('./connection');
var Schema = mongoose_con.Schema;
//var ObjectId = mongoose_con.Schema.Types.ObjectId;
//https://mongoosejs.com/docs/populate.html

var propSchema = new Schema({ 
 propNombre:String ,
 });

var empSchema = new Schema({
  _id: Schema.Types.ObjectId,
 emp_razsoc:  String,
/* emp_ruc:  {
     type: String,
     required: [true, 'Ruc no valido']
   },*/
// _id:           ObjectId,
 
  emp_Dir:       String,
  emp_FecAni:    String,
  emp_TerTel:    String,
  emp_TerWebUrl: String,
// stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
  propuestas: [{ type: Schema.Types.ObjectId, ref: 'propuesta' }],  

 //propuestas: [propSchema] 
});

/* ============== SCHEMA USUARIO ====================== */
//var Autor = mongoose_con.model('usuarios');
var usuariosSchema = new Schema({
  //_id         :Schema.Types.ObjectId,
  usuUsuario  :String,
  usuNombre   :String,
  usuPassword :String,
  usuPrograma :String,
 // usuIntereses:string,
  propuestas: [{ type: Schema.ObjectId, ref: "propuestas" }] 
});


module.exports = mongoose_con.model("propuestas", empSchema);

module.exports.Propuestas   = mongoose_con.model("propuesta", empSchema);
module.exports.Usuarios     = mongoose_con.model("usuario", usuariosSchema);
module.exports.Empresa   = mongoose_con.model("empresa", empSchema);

/*
module.exports.Alumnos = function () { 
  console.log(msg);
};*/