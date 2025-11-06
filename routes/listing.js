const express = require('express');
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const { listingSchema } = require("../schema.js");
const expressError = require("../utils/expressError.js");
const { reviewsSchema } = require("../schema.js");
const Listing = require("../models/listing.js");

// const cookieParser = require('cookie-parser');
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");


// <--------------------------------------------------------------->
//to get all listing
router.get("/", 
    wrapasync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

// <--------------------------------------------------------------->
//(/listing/new ka conflit ho raha h (/listing/:id) se )
// or (listing/:id) wala execuate ho ja raha tha kyuki ye upper tha to new ko id smjha liya tha esne or error aa raha hhta 
//new GET Route
router.get("/new", 
    isLoggedIn, 
    wrapasync(async (req, res) => {
    console.log(`req.user: ${req.user}`);
    res.render("listings/form.ejs")
}));

//new ke Get route ke bad ab jese hi add button pr click ho post req jaye (/listing) pr or new
//post add ho jaye (create route) 
router.post("/", 
    isLoggedIn, 
    validateListing, 
    wrapasync(async (req, res, next) => {

    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "Successfully Created a new Listing !");
    res.redirect("/listing");
}));

// <--------------------------------------------------------------->
//show route(read route)
router.get("/:id", 
    wrapasync(async (req, res) => {
    let { id } = req.params;
    const listingById = await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:({
            path:"author",
        })
    })
    .populate("owner");

    if (!listingById) {
        req.flash("error", "Listing you requested for doesn't exist !");
        return res.redirect("/listing");
    }
    // console.log("listingById =>",listingById);
    res.render("listings/show.ejs", { listingById });
}));


// <--------------------------------------------------------------->
//edit GET Route to get edit form
router.get("/:id/edit", 
    isLoggedIn, 
    isOwner,
    wrapasync(async (req, res) => {
    let { id } = req.params;
    const listingById = await Listing.findById(id);

    if (!listingById) {
        req.flash("error", "Listing you requested for doesn't exist !");
        return res.redirect("/listing");
    }

    res.render("listings/edit.ejs", { listingById });
}));

//ab update route =>
router.put("/:id", 
    isLoggedIn, 
    isOwner,
    validateListing, 
    wrapasync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated Successfully !");
    res.redirect(`/listing/${id}`);
}));
// <--------------------------------------------------------------->
//delete Route 
// DELETE Route (THE FIX IS HERE)
router.delete("/:id", 
    isLoggedIn, 
    isOwner,
    wrapasync(async (req, res) => {
    let { id } = req.params; // Corrected line
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully !");
    res.redirect("/listing");
}));

module.exports = router;