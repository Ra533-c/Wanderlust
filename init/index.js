const mongoose = require('mongoose');
const initData = require("./data.js");
const listing = require("../models/listing.js");

const mongoUrl = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() => {
    console.log("Connected To DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongoUrl);
}

const initializeDB = async () => {
    await listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj , owner:"6900effef59e51e3d70abf11"}));
    await listing.insertMany(initData.data);
    console.log("data initilized successfully");
}

initializeDB();