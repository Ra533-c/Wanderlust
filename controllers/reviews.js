const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");

module.exports.post = async (req,res,next)=>{
    let {id} = req.params;

    let listingById = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log("newReview =>",newReview);
    listingById.reviews.push(newReview);
    await newReview.save();
    await listingById.save();  //typo

    console.log("NewReview Saved !");
    console.log("Req.body =>",req.body)
    console.log("req.body.review =>",req.body.review)
    // res.send("New Review Saved Successfully");
    res.redirect(`/listing/${id}`);

};

module.exports.delete = async(req,res,next)=>{
    let {id , reviewId} = req.params;
    await Listing.findByIdAndUpdate(id , {$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listing/${id}`);
};
