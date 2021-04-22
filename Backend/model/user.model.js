let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let UserSchema = mongoose.Schema({
    _id:Number,
    userName:String,
    userPassword:String,
    cart:[{productId:Number,productName:String,quantity:Number,unitPrice:Number,totalPrice:Number}]
})

let UserModel = mongoose.model("",UserSchema,"User");

module.exports = UserModel