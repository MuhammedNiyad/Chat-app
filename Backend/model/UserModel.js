const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        requierd:true,
    },
    password:{
        type:String,
        requierd:true,
    },
    pic:{
        type:String,
        requierd:true,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
},{timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;