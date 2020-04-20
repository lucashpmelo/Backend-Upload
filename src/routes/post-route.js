'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/post-controller');

const multer = require('multer');
const multerConfig = require('../config/multer');

router.get('/', controller.get);
//router.post('/', multer(multerConfig).single('file'), controller.post);
router.post('/', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;