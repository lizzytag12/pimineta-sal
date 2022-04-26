var express = require('express');
var router = express.Router();

/* POR CADA ENRUTADOR VAMOS A TENER UN CONTROLADOR */

const {index, detail} = require('../controllers/mainController')

/* GET home page. */
/* / */
router.get('/', index);
router.get('/detalle/:id',detail);

module.exports = router;
