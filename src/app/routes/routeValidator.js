
  const { check} = require('express-validator/check');
  
  exports.appCustomValidator = {
    VALIDATE_REGISTER: [
        check('usuPassword').isEmail().withMessage('Tiene que ser un correo valido'),
        check('usuPassword').isLength({ min: 5 }).withMessage('Debe ser mayor de 5 caracteres')
      ]
      
};
