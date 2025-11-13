const express = require('express');
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const { listingSchema } = require("../schema.js");
const expressError = require("../utils/expressError.js");
const { reviewsSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const listingController = require("../controllers/listing.js");
const Review = require("../models/reviews.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js"); //uplaod se uper 
const upload = multer({ storage });
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");


// <--------------------------------------------------------------->
//to get all listing
router.route("/")
    .get(wrapasync(listingController.index))
    .post(
        isLoggedIn,
        validateListing, 
        upload.single('listing[image]'), 
        wrapasync(listingController.post)
    );



// <--------------------------------------------------------------->
//(/listing/new ka conflit ho raha h (/listing/:id) se )
// or (listing/:id) wala execuate ho ja raha tha kyuki ye upper tha to new ko id smjha liya tha esne or error aa raha hhta 
//new GET Route
router.get("/new", 
    isLoggedIn, 
    wrapasync(listingController.new)
);


// <--------------------------------------------------------------->
//show route(read route)
router.route("/:id")
    .get(wrapasync(listingController.show))
    .put(
        isLoggedIn, 
        isOwner, 
        validateListing, 
        upload.single('listing[image]'), 
        wrapasync(listingController.update)
    )
    .delete(
        isLoggedIn, 
        isOwner, 
        wrapasync(listingController.delete)
    )

// <--------------------------------------------------------------->
//edit GET Route to get edit form
router.get("/:id/edit", isLoggedIn, isOwner, wrapasync(listingController.edit));


module.exports = router;