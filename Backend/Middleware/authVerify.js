import jwt from 'jsonwebtoken';
import User from '../Models/user.js';


const authVerify=async(req,res,next)=>{
    const {authorization} = req.headers;
if(!authorization){
   return  res.status(401).json({error:"Token is required"});

}
const token = authorization.split(' ')[1]
try{
    
    const {_id} =jwt.verify(token,process.env.SECRET);
    req.user= await User.findOne({_id}).select('_id');
    next()
}
catch(err){
    res.status(401).json({error:'The request is not authorized '});

}
}
export default authVerify;