const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapasync = require("../utils/wrapasync.js");
const expressError = require("../utils/expressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const { reviewsSchema } = require("../schema.js");
const { validateReview, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");



// <--------------------------------------------------------------->
//reviews raute (POST raute)=>
router.post("/", isLoggedIn, validateReview, wrapasync(reviewController.post));
// <--------------------------------------------------------------->
//making an delete Route at (/listing/:id/reviews/reviews_id) to delete the reivew form listing obj's reviews array 
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapasync(reviewController.delete));

module.exports = router;