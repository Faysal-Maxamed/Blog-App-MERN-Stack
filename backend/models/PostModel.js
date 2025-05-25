import mongoose, { Schema } from "mongoose";

const PostsSchema=mongoose.Schema({
    tittle:{
        require:true,
        type:String
    },
    Content:{
        required:true,
        type:String,
    },
    image:{
        type:String,
        default:null
    },
    author:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Users"
    }

});

const PostModel=mongoose.model("Posts",PostsSchema);
export default PostModel;