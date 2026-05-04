const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data");

const EXTRA_LISTING_TITLES = [
  "Cliffside Santorini Suite",
  "Rainforest Treehouse Retreat",
  "Tokyo Skyline Studio",
  "Heritage Haveli Stay",
  "Island Bamboo Bungalow",
  "Northern Lights Glass Cabin",
  "Backwater Houseboat Escape",
  "Alpine Chalet Hideaway",
  "Seaside Artist Loft",
  "Desert Dome Camp",
];

main()
  .then(() => {
    console.log("connection was successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const addListings = async () => {
  const newListings = initData.data.filter((listing) =>
    EXTRA_LISTING_TITLES.includes(listing.title)
  );

  const existingTitles = await Listing.find(
    { title: { $in: EXTRA_LISTING_TITLES } },
    { title: 1, _id: 0 }
  );

  const existingTitleSet = new Set(existingTitles.map((listing) => listing.title));
  const listingsToInsert = newListings.filter(
    (listing) => !existingTitleSet.has(listing.title)
  );

  if (listingsToInsert.length === 0) {
    console.log("No new listings to insert.");
    return mongoose.connection.close();
  }

  await Listing.insertMany(listingsToInsert);
  console.log(`${listingsToInsert.length} new listings added.`);
  await mongoose.connection.close();
};

addListings();
