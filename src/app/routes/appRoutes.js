const router = require('express').Router();

const appController = require('../controllers/appController');

router.get('/', appController.index);

/*====================== Empresa ====================*/
router.post('/insertarEmp', appController.insEmp);
router.get('/insProp/:id', appController.insProp);


/*====================== Usuario ====================*/
router.post('/insUsu', appController.insUsu); //ingresa usuario
router.post('/insUsuProp/', appController.insUsuProp); //ingresa propuesta usuario

router.get('/getPropUsu', appController.GetPropUsu);
//https://carlosazaustre.es/como-relacionar-tus-modelos-en-mongodb/
//router.get('/update/:id', appController.update);
/*router.get('/contacto', appController.contacto);
router.get('/productos', appController.productos);
router.get('/nosotros', appController.nosotros);

/*router.get('/test', galtecController.test);
router.get('/contacto', galtecController.contacto);
router.get('/nosotros', galtecController.nosotros);
router.get('/servicios', galtecController.servicios);
router.post('/enviar_msg', galtecController.enviar_msg);
*/
module.exports = router;