import mongoose from "mongoose";
import validator from 'validator';


const UserSchema = mongoose.Schema({
    Email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, "please enter a valid email"]
    },
    Username: {
        type: String,
        require: true,
    },
    Password: {
        type: String,
        require: true,
    }

},
    {
        timestamps: true,
    }
)

const User=mongoose.model("Users",UserSchema);
export default User;