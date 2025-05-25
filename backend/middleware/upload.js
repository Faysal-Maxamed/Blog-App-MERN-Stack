import multer from "multer";

const Storage= multer.memoryStorage();

const upload= multer({
    storage:Storage,
    limits:{
        fileSize:5 * 1024* 1024
    }

});

export default upload;