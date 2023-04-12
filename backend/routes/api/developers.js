const express = require('express');
const { developers } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');

const router = express.Router();

router.get('/', ctrlWrapper(developers));

module.exports = routerDevelopers = router;
