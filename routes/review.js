const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const {reviewSchema} = require("../schema");
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {validateReview,isLoggedin,isOwner,isReviewAuthor} = require("../middleware");
const reviewController = require("../controller/reviews");





router.post("/",isLoggedin, validateReview, wrapAsync(reviewController.createReview));

router.delete(
  "/:reviewId",isLoggedin,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router