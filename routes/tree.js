var express = require('express');
var router = express.Router();

const tree_controlers= require('../controllers/tree');
var router = express.Router();
/* GET costumes */
router.get('/', tree_controlers.tree_view_all_Page );
/* GET detail costume page */
router.get('/detail', tree_controlers.tree_view_one_Page);
/* GET create costume page */
router.get('/create', tree_controlers.tree_create_Page);
/* GET create update page */
router.get('/update', tree_controlers.tree_update_Page);

module.exports = router;