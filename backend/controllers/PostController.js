import express from 'express';
import PostModel from '../models/PostModel.js';
import { authentication } from '../middleware/auth.js';
import Cloudinary from '../config/cloudinary.js'
import upload from '../middleware/upload.js';
const PostsRouter = express.Router();

PostsRouter.get('/', async (req, res) => {
    const getall = await PostModel.findOne()
    res.status(200).json(getall);
})

PostsRouter.post('/create-post',authentication,upload.single('image'),async(req,res)=>{

    try {
        const {tittle,Content}=req.body;
        const currentUser=req.user._id;
        // console.log(currentUser)

        let result;
        if(req.file){
            var encodedimage=`data:image/jpeg;base64,${req.file.buffer.toString('base64')}`;

            result=await Cloudinary.uploader.upload(encodedimage,{
                resource_type:'image',
                transformation:[{width:500,height:500,crop:'limit'}],
                encoding:'base64'
            })
        };
        const createPost=new PostModel({
            tittle:tittle,
            Content:Content,
            image:result?.url || null,
            author:currentUser
        });

        const NewPost=await createPost.save();

        res.status(201).json(NewPost);
        
    } catch (error) {
        res.status(500).json({message:`error came from ${error}`})
    }

})
export default PostsRouter;