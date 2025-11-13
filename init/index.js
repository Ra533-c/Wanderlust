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
    // Add owner to each listing object
    const listingsWithOwner = initData.data.map((obj) => ({
        ...obj, owner: "690c7b18abf8b4486497c198" 
    }));
    await listing.insertMany(listingsWithOwner);
    console.log("data initilized successfully");
}

initializeDB();