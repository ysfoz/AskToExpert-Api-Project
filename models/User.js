const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required: [true,'Please provide a name']
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Please try another Email'],
        match:[
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            'Please provide a valid Email'
        ]

    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    },
    password:{
        type:String,
        minlength:[6,'Please enter a valid Password'],
        required:true,
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    title:{
        type:String
    },
    about:{
        type:String
    },
    place:{
        type:String
    },
    website:{
        type:String
    },
    prfile_img:{
        type:String,
        default:'default.jpg'
    },
    blocked:{
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model("User",UserSchema)
