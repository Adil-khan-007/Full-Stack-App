const mongoose  = require("mongoose");

const TodoSchema = new mongoose.Schema({
    name : String,
    age : String,
    image : String,
    gender : String,
    hobby : String
},{
    timestamps : true
})

const TodoModel = mongoose.model("Todo",TodoSchema);

module.exports = TodoModel;