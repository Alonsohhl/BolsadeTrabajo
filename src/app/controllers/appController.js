const controller = {};

var mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://admin:admin@dbbolsadetrabajo-3qw6r.mongodb.net/dbbolsadetrabajo', { useNewUrlParser: true });

// get reference to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//var Model = require('./db/propuestas.js').Propuestas;
//var EmpresasModel = Model.Propuestas;

//var EmpresasModel = require('./db/propuestas.js').Propuestas;
var UsuariosModel = require('./db/propuestas.js').Usuarios;
var EmpresasModel = require('./db/propuestas.js').Empresa;
var PropuestasModel = require('./db/propuestas.js').Propuestas;

controller.index = (req, res) => {

    res.render('index');
    console.log('Carga completa');
    
    };

/* ================= Insertar Empresa ===================*/
controller.insEmp = (req, res) => { //
    
    var newEmp = new EmpresasModel(req.body);
    newEmp._id=new mongoose.Types.ObjectId();
    newEmp.save(function (err) {
    if (err) return res.status(500).send({ error: err });
    return res.send("Ingresado Correctamente");
    
    });

};
/* ================= Ingreso de Empresa->Propuesta ===================*/
controller.insProp = (req, res) => {

    req.checkBody('empresa_id', 'ID invalido').notEmpty();
    req.checkBody('propNombre', 'propuesta invalida').exists();
    var errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        EmpresasModel.findOne({_id: req.body.empresa_id},function (err,foundObject) {
        if (err) return res.status(500).send({ error: err });
        if (!foundObject) return res.status(500).send({ error: "Registro no encontrado" });
            console.log("Propuesta "+req.body.propuesta);

            var propuesta = new PropuestasModel({
                _id: new mongoose.Types.ObjectId(),
                empresa: foundObject,
                propNombre:'propuestilla' ,
                
              });
              propuesta.save(function (err) {
                if (err) return handleError(err);

                console.log("Ingresado correctamente");
                res.send(foundObject);
                // thats it!
              });


            
        });
    }
}
/* ================= Usuario Check Login ===================*/
controller.usuLogin = (req, res) => {

    req.checkBody('usuUsuario',    'Usuario invalido').notEmpty().isString();
    // req.checkBody('usuNombre',     'Nombre invalido').notEmpty().isString();
    // req.checkBody('usuCodAlumno',    'Codigo de Alumno  invalido').notEmpty().isString();
    // req.checkBody('usuPrograma',   'Programa invalido').optional().isString();
    req.checkBody('usuPassword',   'Password invalido').notEmpty()
    // req.checkBody('usuIntereses',  'Intereses invalido').optional().isString();


    UsuariosModel.find({usuUsuario:req.body.usuUsuario,usuPassword:req.body.usuPassword,},function (err,foundObject) {
        console.log(foundObject)
        if (err) res.send(res.status(500));
        res.status(200).send(foundObject);        
    });
}
/* ================= Ingreso de Usuario ===================*/
controller.insUsu = (req, res) => {

    req.checkBody('usuUsuario',    'Usuario invalido').notEmpty().isString();
    req.checkBody('usuNombre',     'Nombre invalido').notEmpty().isString();
    req.checkBody('usuCodAlumno',    'Codigo de Alumno  invalido').notEmpty().isString();
    req.checkBody('usuPrograma',   'Programa invalido').optional().isString();
    req.checkBody('usuPassword',   'Password invalido').notEmpty()
    req.checkBody('usuIntereses',  'Intereses invalido').optional().isString();

    var errors = req.validationErrors();
    if (errors) {
        // res.send(errors);
        // return;
        return res.send({ error: errors });
    } else {
        var newEmp = new UsuariosModel(req.body);
        newEmp.save(function (err) {
            if (err) res.send(res.status(500));//return res.status(500)//.send({ error: err });
            return res.send("Ingresado Correctamente");

        });
    }
}

/* ================= Ingreso de Usuario -> Propuesta ===================*/
controller.insUsuProp = (req, res) => {

    req.checkBody('_id'         ,'ID Usuario invalido').notEmpty().isString();
    req.checkBody('propuesta'   ,'ID Propuesta invalido').notEmpty().isString();
    

    var errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        UsuariosModel.findOne({_id: req.body._id},function (err,foundObject) {
            if (err) return res.status(500).send({ error: err });
            if (!foundObject) return res.status(500).send({ error: "Usuario no encontrado" });
            foundObject.propuestas.push(req.body.propuesta);
            foundObject.save(function (err) {
                if (err) console.log({ error: err });
                console.log("Ingresado correctamente");
                res.send(foundObject);
                });
                
        });
    }
}

/* ================= Obtener de Usuario -> Propuestas ===================*/
controller.GetPropUsu = (req, res) => {

    /*    req.checkBody('_id'         ,'ID Usuario invalido').notEmpty().isString();
        req.checkBody('propuesta'   ,'ID Propuesta invalido').notEmpty().isString();
        
    
        var errors = req.validationErrors();
        if (errors) {
            res.send(errors);
            return;
        } else {
      */      
            //UsuariosModel.findOne({_id: req.body._id},function (err,foundObject) {
          
    /*        UsuariosModel.find({},function (err,foundObject) {
                console.log(foundObject)
                EmpresasModel.populate(foundObject, {path: "propuestas"},function(err, libros){
                    res.status(200).send(libros);
                }); */
                UsuariosModel.find({_id:""},function (err,foundObject) {
                    console.log(foundObject)
                    EmpresasModel.populate(foundObject, {path: "propuestas"},function(err, libros){
                        res.status(200).send(libros);
                    });
    
             
                /*
                if (err) return res.status(500).send({ error: err });
                if (!foundObject) return res.status(500).send({ error: "Usuario no encontrado" });
                foundObject.propuestas.push(req.body.propuesta);
                foundObject.save(function (err) {
                    if (err) console.log({ error: err });
                        console.log("Ingresado correctamente");
                        res.send(foundObject);
                    });*/
                    
                });
        //}
    }


controller.update = (req, res) => { // Actualizar Valor


};
    


module.exports = controller; 