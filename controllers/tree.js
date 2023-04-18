var Tree = require('../models/tree');

// List of all Tree
exports.tree_list = async function(req, res) {
    try{
    theTree = await Tree.find();
    res.send(theTree);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

      // VIEWS
// Handle a show all view
exports.tree_view_all_Page = async function(req, res) {
    try{
    theTree = await Tree.find();
    res.render('tree', { title: 'Costume Search Results', results: theTree });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle Tree create on POST.
exports.tree_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Tree();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {age: 20, size: 100, name: "oak"}
    document.age = req.body.age;
    document.size = req.body.size;
    document.name = req.body.name;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific Tree.
exports.tree_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Tree.findById(req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle Tree update form on PUT.
   exports.tree_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Tree.findById(req.params.id)
    // Do updates of properties
    if(req.body.age) toUpdate.age = req.body.age;
    if(req.body.size) toUpdate.size = req.body.size;
    if(req.body.name) toUpdate.name = req.body.name;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };

// Handle Tree delete on DELETE.
exports.tree_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Tree.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.tree_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Tree.findById( req.query.id)
    res.render('treedetail',
   { title: 'Tree Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.tree_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('treecreate', { title: 'Tree Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a costume.
// query provides the id
exports.tree_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Tree.findById(req.query.id)
    res.render('treeupdate', { title: 'Tree Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};