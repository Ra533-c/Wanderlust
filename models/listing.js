const mongoose = require('mongoose');
const Review  = require("./reviews.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fgreenery&psig=AOvVaw019rHJwJsvjHfaXaPQcs40&ust=1758261723571000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJicgcHR4Y8DFQAAAAAdAAAAABAE0",
        set: (v) => v === "" ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fgreenery&psig=AOvVaw019rHJwJsvjHfaXaPQcs40&ust=1758261723571000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJicgcHR4Y8DFQAAAAAdAAAAABAE" : v,
    },
    prize:Number ,
    location: String,
    country: String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"review"
        }
    ]
}, { strict: true });

listingSchema.post("findOneAndDelete" , async (listing) =>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
})

//Aapka yeh statement 100% correct hai. Hum yahi kehna chahte hain. listing.reviews ek "shopping list" hai jismein unn sabhi reviews ki ID likhi hai jinhe delete karna hai. deleteMany uss list ko leta hai aur Review collection mein jaakar uss list mein maujood har ID waale document ko dhoondh kar delete kar deta hai.

//"Review collection mein jao aur unn sabhi documents ko delete kar do, jinki _id is array [...abc, ...def, ...ghi] ke andar maujood hai."

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;