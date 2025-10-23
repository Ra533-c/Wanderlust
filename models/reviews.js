const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

reviewSchema.virtual("formattedCreatedAt").get(function(){
    return this.createdAt.toLocaleDateString('en-IN' , {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
    });
});

const review = mongoose.model("review", reviewSchema);

module.exports = review;