const mongoose = require('mongoose');
const initData = require("./data.js");
const listing = require("../models/listing.js");
const User = require("../models/user.js");

const mongoUrl = 'mongodb+srv://doyouknow32386_db_user:d26q8DHJBEqTNyEc@wanderlust.fb7limu.mongodb.net/wanderlust';

main().then(() => {
    console.log("✅ Connected To Local DB (wanderlust)");
}).catch((err) => {
    console.log("❌ DB Connection Error:", err);
});

async function main() {
    await mongoose.connect(mongoUrl);
}

const initializeDB = async () => {
    try {
        // Step 1: Clear old data
        await listing.deleteMany({});
        await User.deleteMany({});
        console.log("🗑️  Old listings and users deleted.");

        // Step 2: Create 2 real users using passport-local-mongoose register()
        const user1 = new User({ username: "rajnikant", email: "rajni@example.com" });
        const registeredUser1 = await User.register(user1, "abc");
        console.log(`✅ User 1 created: ${registeredUser1.username} (ID: ${registeredUser1._id})`);

        const user2 = new User({ username: "khusboo", email: "khusboo@example.com" });
        const registeredUser2 = await User.register(user2, "abc");
        console.log(`✅ User 2 created: ${registeredUser2.username} (ID: ${registeredUser2._id})`);

        // Step 3: Add owner to each listing - split between 2 users
        const listingsWithOwner = initData.data.map((obj, index) => ({
            ...obj,
            owner: index % 2 === 0 ? registeredUser1._id : registeredUser2._id
            // Even index listings → user1, Odd index listings → user2
        }));

        // Step 4: Insert all listings
        await listing.insertMany(listingsWithOwner);
        console.log(`✅ ${listingsWithOwner.length} listings inserted successfully!`);

        // Step 5: Verify
        const userCount = await User.countDocuments();
        const listingCount = await listing.countDocuments();
        console.log(`\n📊 Final Count:`);
        console.log(`   Users: ${userCount}`);
        console.log(`   Listings: ${listingCount}`);
        console.log(`\n🎉 Database initialized successfully!`);
        console.log(`\n📝 Login Credentials:`);
        console.log(`   User 1: username="rajnikant", password="abc"`);
        console.log(`   User 2: username="khusboo", password="abc"`);

        process.exit(0);
    } catch (err) {
        console.log("❌ Error during initialization:", err);
        process.exit(1);
    }
};

initializeDB();