var express = require('express');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
   }
   req.session.returnTo = req.originalUrl;
   res.redirect("/login");
   }

const tree_controlers= require('../controllers/tree');
var router = express.Router();
/* GET costumes */
router.get('/', tree_controlers.tree_view_all_Page );
/* GET detail costume page */
router.get('/detail', tree_controlers.tree_view_one_Page);
/* GET create costume page */
router.get('/create', tree_controlers.tree_create_Page);
/* GET create update page */
router.get('/update', secured, tree_controlers.tree_update_Page);
/* GET delete costume page */
router.get('/delete', tree_controlers.tree_delete_Page);

module.exports = router;