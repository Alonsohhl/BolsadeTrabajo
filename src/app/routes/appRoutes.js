const router = require('express').Router();

const appController = require('../controllers/appController');

router.get('/', appController.index);
router.get('/insertarEmp', appController.insEmp);
router.get('/insProp/:id', appController.insProp);
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