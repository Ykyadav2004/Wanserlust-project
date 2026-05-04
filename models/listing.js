const mongoose = require('mongoose');
const Review = require("./review");
const {Schema} = mongoose;

const listingSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
   url : {
    type: String,
    default: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
   },
   filename:{
    type: String,
    default: "default-listing-image",
   }, 
    },
    price : Number,
    location : String,
    country : String,
     reviews : [ 
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
    owner : {
       type : Schema.Types.ObjectId,
            ref : "User",
    }

});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews },
    });
  }
});

const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;
