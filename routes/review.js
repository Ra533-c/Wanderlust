const express = require('express');
const router = express.Router({mergeParams:true});
const wrapasync = require("../utils/wrapasync.js");
const expressError = require("../utils/expressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js");
const {reviewsSchema} = require("../schema.js");
const {validateReview , isReviewAuthor} = require("../middleware.js");

// <--------------------------------------------------------------->
//reviews raute (POST raute)=>
router.post("/",
    isLoggedIn, 
    validateReview , 
    wrapasync(async (req,res,next)=>{
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

}));
// <--------------------------------------------------------------->
//making an delete Route at (/listing/:id/reviews/reviews_id) to delete the reivew form listing obj's reviews array 
router.delete("/:reviewId",
    isLoggedIn, 
    isReviewAuthor,
    wrapasync(async(req,res,next)=>{
    let {id , reviewId} = req.params;
    await Listing.findByIdAndUpdate(id , {$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listing/${id}`);
}));

module.exports = router;