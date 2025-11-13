const cloudinary = require('cloudinary').v2; //reequiring the version2 of cloudinary 
const { CloudinaryStorage } = require('multer-storage-cloudinary'); // here require msc

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME ,
    api_key: process.env.CLOUD_API_KEY, 
    api_secret:process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { //instructions to cloudinary 
    folder: 'Wanderlust_DEV',
    allowedFormats: ['png','jpg','jpeg']
  },
});

module.exports =  {
    cloudinary ,
    storage
};