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
}

},{timestamps:true}
)

const todomodel = mongoose.model('todomodel',WorkSchema);
export default todomodel;