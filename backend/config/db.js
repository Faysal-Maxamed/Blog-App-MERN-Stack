import mongoose from "mongoose";
import { dbUrl } from "./config.js";

const connectdb=async()=>{

    try {
        await mongoose.connect(dbUrl);
        console.log(`database to the connected `)
    } catch (error) {
        console.log(`error occur in ${error}`)
    }
}

export default connectdb;