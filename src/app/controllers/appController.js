const controller = {};

const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://admin:admin@dbbolsadetrabajo-3qw6r.mongodb.net/dbbolsadetrabajo', { useNewUrlParser: true });

// get reference to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


  var Schema = mongoose.Schema;

  //==INI===========Schemas ================
  var propSchema = new Schema({ 
    propNombre:String ,
     
    });

  var empSchema = new Schema({
    
    emp_razsoc:  String,
    emp_ruc:  {
        type: String,
        required: [true, 'Ruc no valido']
      },
    emp_Dir:  String,
    emp_FecAni:  String,
    emp_TerTel:  String,
    emp_TerWebUrl:  String,
      

    propuestas: [propSchema] 
  });
  //==FIN===========Schemas ================

  var ChoiseModel = mongoose.model('propuestas', empSchema);

  // assign a function to the "methods" object of our animalSchema
  empSchema.methods.findSimilarTypes = function(cb) {
    return this.model('propuestas').find({}, cb);
    //return this.model('propuestas').find({ nombre: this.nombre }, cb);
  };

  empSchema.methods.insertar_empresa = function(cb) {
    return this.model('propuestas').find({}, cb);
    
  };

controller.index = (req, res) => {



    
    
var Propuesta = mongoose.model('propuestas', empSchema);
//var Psoft = new Propuesta({ nombre: 'propuesta de software' });
Psoft.findSimilarTypes(function(err, propuestas) {
    console.log(propuestas); // propuesta
});

res.render('index');
console.log('Carga completa');

};

controller.index = (req, res) => {/*

    var Propuesta = mongoose.model('propuestas', empSchema);    
    var Psoft = new Propuesta({ nombre: 'propuesta de software' });
    Psoft.findSimilarTypes(function(err, propuestas) {
        console.log(propuestas); // propuesta
    });
    */
    res.render('index');
    console.log('Carga completa');
    
    };

controller.insEmp2 = (req, res) => { //Insertar

    console.log(req.body);
    update = {nombre:'nombresillo'},
    req.newData = req.body;
    ChoiseModel.findByIdAndUpdate('5bfc522855e3042524bf924e', 
    {"emp_nom":"nombre Empresa xD","propuestas":[{"propNombre":"Nombre de propuesta"}]}
    , function (err, foundObject) {
        if (err) return res.status(500).send({ error: err });
        return res.send("succesfully saved");
        
        });
    };

controller.insEmp = (req, res) => { //Insertar Empresa

    console.dir(req);
    var newEmp = new ChoiseModel(req.body);
    newEmp.save(function (err) {
    if (err) return res.status(500).send({ error: err });
    return res.send("Grabado satisfactoriamente");
    // saved!
    });

/*
    console.log(req.body);
    update = { nombre: 'nombresillo' },
        req.newData = req.body;
    ChoiseModel.findByIdAndUpdate('5bfc522855e3042524bf924e',
        { "emp_nom": "nombre Empresa xD", "propuestas": [{ "propNombre": "Nombre de propuesta" }] }
        , function (err, foundObject) {
            if (err) return res.status(500).send({ error: err });
            return res.send("succesfully saved");

        });*/


};

controller.insertProp = (req, res) => { //Insertar

    var id=req.params.id;
    ChoiseModel.findByIdAndUpdate({_id: id},function (err,foundObject) {

        /*
        {"_id":"5bfd6725e9f81f3808efee42","emp_nom":"nombre Empresa","propuestas":[{"_id_emp":"5bfd6753e9f81f3808efee43","prop_nom":"Nombre de propuesta"},{"_id_emp":"5bfd67bfe9f81f3808efee45","prop_nom":"nombre propuesta 2"}]}
        
        */ 
    console.log("Actualizando "+req.body.text);
    if(err){
        console.log(err);
        res.status(500).send();
    }

    if(foundObject && req.body && req.body.text){
            foundObject.nombre=req.body.text;
            foundObject.nombre=req.body.text;
        foundObject.save(function (err, udpObject) {
            if (err) res.status(500).send();//return console.error(err);
            console.log(udpObject.nombre + " Actualizado en la coleccion -> Propuestas.");
            res.send(udpObject);
        });
    }else
    {   res.status(404).send();}

    });



    var Propuesta= new ChoiseModel();
    if(foundObject && req.body && req.body.text){
    Propuesta.nombre="asd";
    Propuesta.save(function (err, savedObject) {
        if (err) return console.error(err);
        console.log(savedObject.nombre + " Grabado en la coleccion -> Propuestas.");
    });
};
};

controller.update = (req, res) => { // Actualizar Valor

        var id=req.params.id;
        ChoiseModel.findOne({_id: id},function (err,foundObject) {
        console.log("Actualizando "+req.body.text);
        if(err){
            console.log(err);
            res.status(500).send();
        }

        if(foundObject && req.body && req.body.text){
                foundObject.nombre=req.body.text;
                foundObject.nombre=req.body.text;
            foundObject.save(function (err, udpObject) {
                if (err) res.status(500).send();//return console.error(err);
                console.log(udpObject.nombre + " Actualizado en la coleccion -> Propuestas.");
                res.send(udpObject);
            });
        }else
        {   res.status(404).send();}

        
    });

};
    


/*

controller.contacto = (req, res) => {     
    res.render('wandel/contacto');
    console.log('Carga contacto cargando');

};

controller.productos = (req, res) => {     
    res.render('wandel/productos');
    console.log('Carga productos cargando');

};

controller.nosotros = (req, res) => {     
    res.render('wandel/nosotros');
    console.log('Carga contacto cargando');

};

/*
controller.test = (req, res) => {     
    res.render('galtec/index2');
    console.log('Carga completa 2');
};
controller.contacto = (req, res) => {     
    res.render('galtec/contacto');
    console.log('Carga contacto cargando');
};
controller.nosotros = (req, res) => {     
    res.render('galtec/nosotros');
    console.log('Nosotros cargando');
};
controller.servicios = (req, res) => {     
    res.render('galtec/servicios');
    console.log('servicios cargando');
};
controller.enviar_msg = (req, res) => {
    console.log('enviando mail');
    
    output =`
       <p> Sugerencia o queja </p>
       <h3>=== Detalles ===</h3>
       <ul>
         <li> Nombre: ${req.body.name}</li>
         <li> Nombre: ${req.body.subject}</li>
         <li> Email: ${req.body.email}</li>
         <li> Dirección: ${req.body.budget}</li>
        
   
         
       </ul> 
       `;
   
       let transporter = nodemailer.createTransport({
         host: 'smtp.zoho.com',
         port: 465,//25,//587,
         secure: true, // true for 465, false for other ports
         auth: {
             user: 'alonso.hhl@galtec.org', // generated ethereal user
             pass: 'alonsoucsm'  // generated ethereal password
         },
         tls:{
           rejectUnauthorized:false
         }
       });
   
       let mailOptions = {
           from: '"Galtec Mailer Contacto" <alonso.hhl@galtec.org>', // sender address
           to: 'admin@galtec.org , alonso.hhl@galtec.org , diana.pd@galtec.org',// list of receivers
           subject: 'recepcion de solicitud', // Subject line
           text: 'Revise el correo en un navegador valido, compatible con HTML', // plain text body
           html: output // html body ,
           
       };
   
       // send mail with defined transport object
         transporter.sendMail(mailOptions, (error, info) => {
           if (error) {
               return console.log(error);
           }
           console.log('Message sent: %s', info.messageId);   
           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
           
           res.render('galtec/index');
   //        res.render('form/forms', {msg:'1'});
       });
       //res.render('form/exito');
       console.log(output);
     };
   
  */


module.exports = controller; 