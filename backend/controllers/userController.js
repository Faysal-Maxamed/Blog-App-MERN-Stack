import User from "../models/User.js";
import express from 'express';
const UserRouter = express.Router();

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

        if(!Email || !Username || !Password) return res.status(400).json({message:"please fill required fields"})

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
        const update=req.body;
        const findAndUpd = await User.findOneAndUpdate({_id},update,{new:true});
        if (!findAndUpd) {
            res.status(404).json({ messge: "Failed to updated User" + _id });
        }
        res.status(200).json({ messge: "Succsessfully updated User" + _id });
        
    } catch (error) {
        res.status(500).json({ messge: `${error}`,user:findAndUpd })
    }
})
export default UserRouter;



