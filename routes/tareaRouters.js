const express = require('express');
const router = express.Router();
const {guardarTarea,
    buscarTareas
} = require('../controller/tareaController');


router.post('/guardarTarea', guardarTarea);
router.post('/buscarTarea',buscarTareas );

module.exports = router