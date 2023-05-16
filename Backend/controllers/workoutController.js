import  express from "express";
import todomodel from '../Models/workout.js';
import mongoose from 'mongoose';


export const getWorkout =async(req,res)=>{
    
    const user_id = req.user._id
    const todoget = await todomodel.find({user_id}).sort({createdAt: -1})
    res.status(200).json(todoget);
}

export const singlegetWorkout =async(req,res)=>{
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No such todo"});
    }

    const todosingleid = await todomodel.findById(id);
    if(!todosingleid){
        res.status(404).json({error:"No such todo"});
    }
    res.status(200).json(todosingleid);
}



export const createWork =async(req,res)=>{
    
    const {title,description} = req.body;
    let emptyfield =[];
    if(!title){
        emptyfield.push('title');
    }
    if(!description){
        emptyfield.push('description')
    }   
    if(emptyfield.length>0){
        return res.status(400).json({error:'Please enter the required fields' , emptyfield})
    }
    try{
            const user_id = req.user._id
            const todocreate  = await todomodel.create({title,description,user_id});
            res.status(200).json(todocreate);
    }
    catch(err){
        res.status(400).json({err:err.message});
    }
}

export const deleteWork =async(req,res)=>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No such todo"});
    }
    const todo = await todomodel.findOneAndDelete({_id: id})

    if (!todo) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(todo)
    
}



export const updateWork =async(req,res)=>{
    const {id} = req.params;
   
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error:"No such todo"});
    }
    const todogetid = await todomodel.findByIdAndUpdate({_id:id},{
        ...req.body
    });
    
    res.status(200).json(todogetid);
}