const express = require('express');
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const { listingSchema } = require("../schema.js");
const expressError = require("../utils/expressError.js");
const {reviewsSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const listing = require('../models/listing.js');
// const cookieParser = require('cookie-parser');


const validateListing = (req,res,next)=>{
    const { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map(el => el.message).join(",");
        throw new expressError(400, errMsg);
    }else{
        next();
    }
}

// <--------------------------------------------------------------->
//to get all listing
router.get("/" ,wrapasync( async (req,res)=>{
    let allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
}));

// <--------------------------------------------------------------->
//(/listing/new ka conflit ho raha h (/listing/:id) se )
// or (listing/:id) wala execuate ho ja raha tha kyuki ye upper tha to new ko id smjha liya tha esne or error aa raha hhta 
//new GET Route
router.get("/new",(req,res)=>{
    res.render("listings/form.ejs")
});

//new ke Get route ke bad ab jese hi add button pr click ho post req jaye (/listing) pr or new
//post add ho jaye (create route) 
router.post("/", validateListing , wrapasync(async (req, res, next) => {
    
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","Successfully Created a new Listing !");
    res.redirect("/listing");
}));

// <--------------------------------------------------------------->
//show route(read route)
router.get("/:id",wrapasync(async (req,res)=>{
    let {id} = req.params;
    const listingById = await Listing.findById(id).populate("reviews");

    if(!listingById){
        req.flash("error" , "Listing you requested for doesn't exist !");
        return res.redirect("/listing");
    }

    res.render("listings/show.ejs",{listingById});
}));


// <--------------------------------------------------------------->
//edit GET Route to get edit form
router.get("/:id/edit",wrapasync( async (req,res)=>{
    let {id} = req.params;
    const listingById = await Listing.findById(id);

    if(!listingById){
        req.flash("error" , "Listing you requested for doesn't exist !");
        return res.redirect("/listing");
    }

    res.render("listings/edit.ejs",{listingById});
}));

//ab update route bnayenge 
router.put("/:id", validateListing ,wrapasync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success" , "Listing Updated Successfully !");
    res.redirect(`/listing/${id}`);
}));
// <--------------------------------------------------------------->
//delete Route 
// DELETE Route (THE FIX IS HERE)
router.delete("/:id", wrapasync(async (req, res) => {
    let { id } = req.params; // Corrected line
    await Listing.findByIdAndDelete(id);
    req.flash("success" , "Listing Deleted Successfully !");
    res.redirect("/listing");
}));

module.exports = router;