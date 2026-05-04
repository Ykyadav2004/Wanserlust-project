const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedin, isOwner, validateListing } = require("../middleware");
const listingController = require("../controller/listing");

const multer  = require('multer')
const {storage } = require("../cloudConfig");
const upload = multer({ storage })




const validateObjectId = (req, res, next) => {
  let { id } = req.params;

  if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
    req.flash("error", "Invalid listing id");
    return res.redirect("/listings");
  }

  next();
};


router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedin, upload.single('listing[image]'),validateListing,
  wrapAsync(listingController.createListing));
 
 

  
//agar isko id ke niche likhte tho vo /new ko as a id treat karta
router.get("/new", isLoggedin,listingController.renderNewForm);

router.route("/:id")
.get(validateObjectId, wrapAsync(listingController.showListing))
.put(isLoggedin, validateObjectId, isOwner, upload.single('listing[image]'),
 validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedin, validateObjectId, isOwner, wrapAsync(listingController.destroyListing))


// EDIT route
router.get("/:id/edit", isLoggedin, validateObjectId, isOwner,
   wrapAsync(listingController.renderEditForm));



module.exports = router;
 
