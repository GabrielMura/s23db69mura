var express = require('express');
var router = express.Router();

const tree_controlers= require('../controllers/tree');
var router = express.Router();
/* GET costumes */
router.get('/', tree_controlers.tree_view_all_Page );
module.exports = router;