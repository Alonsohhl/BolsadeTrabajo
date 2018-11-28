

var mongoose_con = require('./connection');
var Schema = mongoose_con.Schema;
var ObjectId = mongoose_con.Schema.Types.ObjectId;

var propSchema = new Schema({ 
 propNombre:String ,
 });

var empSchema = new Schema({
 
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
   

 propuestas: [propSchema] 
});


module.exports = mongoose_con.model("propuestas", empSchema);