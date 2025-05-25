import User from "../models/User.js";
import express from 'express';
import jwt from 'jsonwebtoken';
const UserRouter = express.Router();

export const secret ="SDKMALLAJDMDJILELANKMCMH08JNSGAAAAAAAAABBBBBBBBBBBBUYYY88999OMA";

UserRouter.get('/', async (req, res) => {
    const fetcUser = await User.findOne();
    res.status(200).json(fetcUser);
})


UserRouter.post('/new', async (req, res) => {
    try {
        const { Email, Username, Password } = req.body;
        const isexisting = await User.findOne({ Email })
        if (isexisting) {
            res.status(400).json({ message: "this Email and username already exixts" });
            return null
        }

        if (!Email || !Username || !Password) return res.status(400).json({ message: "please fill required fields" })

        const registeruser = new User({
            Email, Username, Password
        })

        const NewUser = await registeruser.save();
        res.status(201).json(NewUser);
    } catch (error) {
        res.status(500).json({ messge: `${error}` })
    }

});

UserRouter.put('/:_id', async (req, res) => {
    try {

        const { _id } = req.params;
        const update = req.body;
        const findAndUpd = await User.findOneAndUpdate({ _id }, update, { new: true });
        if (!findAndUpd) {
            res.status(404).json({ messge: "Failed to updated User" + _id });
        }
        res.status(200).json({ messge: "Succsessfully updated User" + _id });

    } catch (error) {
        res.status(500).json({ messge: `${error}`, user: findAndUpd })
    }
})
export default UserRouter;

UserRouter.post('/login', async (req, res) => {
  try {
      const { Email, Password } = req.body;
    const isexisting = await User.findOne({Email})
    if(!Email || !Password) {
        return res.status(404).json({message:"Please Enter Your Email and password"})
    }
    if (!isexisting) {
        return res.status(404).json({ message: "this email is not found" })
    }
    if(Password!==isexisting.Password){
      return  res.status(404).json({message:"your password is wrong please trt again"})
    }
    const expireIn=7*24*60*60;
    const token =jwt.sign({_id:isexisting._id},secret,{expiresIn:expireIn});

    res.cookie('token',token,{
        secure:false,
        httpOnly:true,
        maxAge:expireIn*1000
    })

    isexisting.Password=undefined;
    
    res.status(200).send({...isexisting.toJSON(),expireIn})
  } catch (error) {
    res.status(500).json(`error occuring in ${error}`)
  }
})


