const express = require('express');
const router = express.Router({mergeParams:true});
const wrapasync = require("../utils/wrapasync.js");
const { reviewsSchema } = require("../schema.js"); // reviewsSchema yahan require hoga
const expressError = require("../utils/expressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");



const validateReview = (req,res,next)=>{
    const{error} = reviewsSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        throw new expressError(400,errMsg);
    }else{
        next();
    }
}

// <--------------------------------------------------------------->
//reviews raute (POST raute)=>
router.post("/", validateReview , wrapasync(async (req,res,next)=>{
    let {id} = req.params;

    let listingById = await Listing.findById(id);
    let newReview = new Review(req.body.review);

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
router.delete("/:reviewId", wrapasync(async(req,res,next)=>{
    let {id , reviewId} = req.params;
    await Listing.findByIdAndUpdate(id , {$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listing/${id}`);
}));

module.exports = router;