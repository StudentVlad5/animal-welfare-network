const express = require('express');
const { execute } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');

const router = express.Router();

router.get('/', ctrlWrapper(execute));

module.exports = routerNews = router;
