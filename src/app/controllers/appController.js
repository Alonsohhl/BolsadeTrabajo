const controller = {};

var mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://admin:admin@dbbolsadetrabajo-3qw6r.mongodb.net/dbbolsadetrabajo', { useNewUrlParser: true });

// get reference to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var EmpresasModel = require('./db/propuestas.js');

controller.index = (req, res) => {

    res.render('index');
    console.log('Carga completa');
    
    };


controller.insEmp = (req, res) => { //Insertar Empresa

    
    var newEmp = new EmpresasModel(req.body);
    newEmp.save(function (err) {
    if (err) return res.status(500).send({ error: err });
    return res.send("Grabado satisfactoriamente");
    
    });

};
controller.insProp = (req, res) => { 

    EmpresasModel.findOne({_id: req.body._id},function (err,foundObject) {
        if (err) return res.status(500).send({ error: err });
        
       
        res.send(foundObject);
        foundObject.propuestas.push(req.propuesta);
        foundObject.save(done);
    });
}


controller.update = (req, res) => { // Actualizar Valor


};
    


module.exports = controller; 