let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let RequestSchema = mongoose.Schema({
    _id:Number,
    request:String,
    requestStatus:String
})

let RequestModel = mongoose.model("Request",RequestSchema);

module.exports = RequestModel