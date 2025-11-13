const mongoose = require('mongoose');
const Review = require("./reviews.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String
    },
    prize: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category:{
        type:String,
        enum:["mountains","farms","iconic cities","trending","others","castles","amazing pools",],
        required:true
    }
}, { strict: true });

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

//Aapka yeh statement 100% correct hai. Hum yahi kehna chahte hain. listing.reviews ek "shopping list" hai jismein unn sabhi reviews ki ID likhi hai jinhe delete karna hai. deleteMany uss list ko leta hai aur Review collection mein jaakar uss list mein maujood har ID waale document ko dhoondh kar delete kar deta hai.

//"Review collection mein jao aur unn sabhi documents ko delete kar do, jinki _id is array [...abc, ...def, ...ghi] ke andar maujood hai."

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;