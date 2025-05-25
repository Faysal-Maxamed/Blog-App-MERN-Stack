import dotenv from 'dotenv';

dotenv.config();


export const port=process.env.PORT;
export const dbUrl=process.env.MONGO_DB;
export const JSN_SCRET=process.env.JSN_SCRET;
export const Cloudinary_APi_KEy =process.env.Cloudinary_APi_KEy;
export const Cloudinary_Api_Secret=process.env.Cloudinary_Api_Secret;
export const Cloudinary_Cloud_Name=process.env.Cloudinary_Cloud_Name;