import mongoose from "mongoose";
import  'bcrypt';
const schema = mongoose.Schema


const registerSchema = new schema ({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },

});
export default  mongoose.model("User",registerSchema);
