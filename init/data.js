const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers and nightlife lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "A peaceful cabin surrounded by mountains. Ideal for nature lovers and hiking enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 900,
    location: "Manali",
    country: "India",
  },
  {
    title: "Luxury Villa with Pool",
    description:
      "Experience luxury in this beautiful villa with a private pool and modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 3000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Desert Safari Camp",
    description:
      "Enjoy a unique stay in the desert with camel rides and traditional food.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    price: 700,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Lake View Apartment",
    description:
      "Relax in this apartment with a beautiful lake view and peaceful ambiance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    },
    price: 1100,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Snowy Ski Resort Stay",
    description:
      "Perfect winter getaway with skiing facilities and cozy interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    },
    price: 2000,
    location: "Switzerland",
    country: "Switzerland",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Enjoy village life in this peaceful farmhouse surrounded by greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 800,
    location: "Punjab",
    country: "India",
  },
  {
    title: "Cliffside Santorini Suite",
    description:
      "Wake up to whitewashed terraces, sea breezes, and glowing sunsets in this romantic cliffside suite.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 4200,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Rainforest Treehouse Retreat",
    description:
      "A private treehouse tucked into lush rainforest with floor-to-ceiling views and birdsong all day.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    },
    price: 2600,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Tokyo Skyline Studio",
    description:
      "Compact, stylish, and perfectly placed for food trails, neon streets, and late-night city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    },
    price: 3100,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Heritage Haveli Stay",
    description:
      "Live inside restored Rajasthani architecture with courtyards, carved balconies, and warm hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c",
    },
    price: 1800,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Island Bamboo Bungalow",
    description:
      "A breezy bamboo hideaway steps from the water, ideal for slow mornings and barefoot evenings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    price: 2300,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Northern Lights Glass Cabin",
    description:
      "Stay under a glass roof in the Arctic and watch the sky put on a show from the warmth of your bed.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
    },
    price: 5200,
    location: "Rovaniemi",
    country: "Finland",
  },
  {
    title: "Backwater Houseboat Escape",
    description:
      "Cruise through quiet canals in a traditional houseboat with fresh local meals and calm waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505731132164-cca2cb56f5e6",
    },
    price: 1950,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Alpine Chalet Hideaway",
    description:
      "A timber chalet with mountain air, crackling fireplaces, and postcard-worthy alpine scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    },
    price: 3400,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Seaside Artist Loft",
    description:
      "Bright interiors, curated decor, and a breezy balcony make this loft perfect for a creative coastal stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    },
    price: 1650,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Desert Dome Camp",
    description:
      "Sleep in a modern desert dome with stargazing decks, bonfire nights, and wide-open golden dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 1450,
    location: "Wadi Rum",
    country: "Jordan",
  }
];


module.exports = {data : sampleListings};
