const mongoose = require("mongoose")
const treeSchema = mongoose.Schema({
age: Number, 
size: Number, 
name: String
})
module.exports = mongoose.model("Tree", treeSchema)
