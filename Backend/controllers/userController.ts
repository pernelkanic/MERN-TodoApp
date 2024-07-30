import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { ObjectId } from "mongodb";
import validator from 'validator';
import User from '../Models/user.js';
import config from "../config.js";

const createToken = (_id : ObjectId) :string => {
    return jwt.sign({_id:_id}, config.jwt_secret.secret, { expiresIn: '3d' })
  }

 
//login user
export const createlogin=async(req :Request,res:Response)=>{
    const{email ,password }  = req.body;

    try{
       if(!email ||!password ){
           throw Error('All fields must be filled');
   
       }
      
       const us = await User.findOne({ email });
   
       if(!us){
           throw Error('Invalid Email');
   
       }
       const pass = await bcrypt.compare(password , us.password)
       if(!pass){
        throw Error('Incorrect Password')
       }
       const token = createToken(us._id)
       
       res.status(200).json({email,token});
    }
    catch(error ){
        
       res.status(400).json({message:(error as Error).message});
   
    }

    
}





//register user
export const createregister=async(req:Request,res:Response)=>{
 const{email,password,name} = req.body

 try{
    if(!email ||!password ||!name){
        throw new Error('All fields must be filled');

    }
    if(!validator.isEmail(email)){
        throw new Error('Email is not valid')
    }
    if(password.length < 6){
        throw new Error('Password is not strong enough');

    }
    const exist = await User.findOne({ email });

    if(exist){
        throw new Error('Email already in use');

    }
    const salt= await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const reg = await User.create({name,email,password:hash})
    const token = createToken(reg._id)
    
    res.status(200).json({email,token});
 }
 catch(error){
    res.status(400).json({message:(error as Error).message});

 }
 
 

}
