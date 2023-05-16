import mongoose from "mongoose";

const Schema = mongoose.Schema

const WorkSchema = new Schema({
title:{
    type:String,
    required:true

},
description:{
    type:String,
    required:true
},
user_id: {
    type: String,
    required: true
  }
},{timestamps:true})
 
export default mongoose.model('todomodel',WorkSchema);
