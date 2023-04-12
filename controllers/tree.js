var Costume = require('../models/tree');
// List of all Costumes
exports.tree_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Tree list');
};
// for a specific Costume.
exports.tree_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Tree detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.tree_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Tree create POST');
};
// Handle Costume delete form on DELETE.
exports.tree_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Tree delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.tree_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Tree update PUT' + req.params.id);
};