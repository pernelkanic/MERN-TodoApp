import  express from "express";
import todomodel from '../Models/workout.js';
import mongoose from 'mongoose';


export const getWorkout =async(req,res)=>{
    const todoget = await todomodel.find({}).sort({createdAt:-1})
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
            const todocreate  = await todomodel.create({title,description});
            res.status(200).json(todocreate);
    }
    catch(err){
        res.status(400).json({err:err.message});
    }
}

export const deleteWork =async(req,res)=>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({message:"No such todo"});
    }
    const getdelid = await todomodel.findById(id);
    if(!getdelid){
        res.status(404).json({error:"No such todo"});
    }
    const tododelid = await todomodel.findOneAndDelete({_id:id});
    res.status(200).json(tododelid);
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