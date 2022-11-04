const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProfileSchema= new Schema({
    managed_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    employee_name: {
        type: String,
        required: true
    },

    role:{
        type: String,
        default: "employee"
    },

    position:{
        type: String,
        default: "SDE-1"
    },

    age:{
        type: Number,
        required: true
    },

    salary:{
        type: Number,
        required:true
    }
    
});

const Profile=mongoose.model('profile', ProfileSchema);
module.exports =Profile;