import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../Models/user.js';


interface VerificationRequest extends Request{
 
    user?:any
}

export const authVerify=async(req:VerificationRequest,res:Response,next:NextFunction) =>{
    const {authorization} = req.headers
if(!authorization){
   return  res.status(401).json({error:"Token is required"});

}
const token = authorization.split(' ')[1]
try{
    
    const {_id} =jwt.verify(token,process.env.SECRET) as JwtPayload;
    req.user= await User.findOne({_id}).select('_id');
    next()
}
catch(err){
    res.status(401).json({error:'The request is not authorized '});

}
}
