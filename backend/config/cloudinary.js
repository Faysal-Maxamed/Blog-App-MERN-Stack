import Cloudinary from 'cloudinary';
import { Cloudinary_APi_KEy, Cloudinary_Api_Secret, Cloudinary_Cloud_Name } from '../config/config.js';


Cloudinary.v2.config({
    api_key:Cloudinary_APi_KEy,
    api_secret:Cloudinary_Api_Secret,
    cloud_name:Cloudinary_Cloud_Name,
});

export default Cloudinary.v2