const sampleListings = [
  // ========================
  // 🏔️ CATEGORY: mountains
  // ========================
  {
    title: "Alpine Retreat in the Swiss Alps",
    description:
      "Wake up to panoramic views of snow-capped peaks in this cozy alpine chalet. Perfect for hiking in summer and skiing in winter.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 3200,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
    category: "mountains",
  },
  {
    title: "Himalayan Mountain Lodge",
    description:
      "A peaceful retreat in the foothills of the Himalayas. Breathe fresh mountain air and enjoy nature trails all around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 1800,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
    category: "mountains",
  },
  {
    title: "Rocky Mountain Cabin",
    description:
      "Escape to the heart of the Rockies. This log cabin sits at 9000 feet with views of untouched wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 2200,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911],
    },
    category: "mountains",
  },
  {
    title: "Ski Chalet in Niseko",
    description:
      "Powder paradise awaits you in Japan's top ski destination. Enjoy hot springs after a day on the slopes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 4500,
    location: "Niseko",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [140.6988, 42.8621],
    },
    category: "mountains",
  },

  // ========================
  // 🌾 CATEGORY: farms
  // ========================
  {
    title: "Tuscan Vineyard Farmhouse",
    description:
      "Live the Italian dream surrounded by rolling vineyards and olive groves. Includes wine tasting sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 2800,
    location: "Siena",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.3316, 43.3188],
    },
    category: "farms",
  },
  {
    title: "Countryside Barn Stay in Provence",
    description:
      "A charming rustic barn converted into a cozy home, surrounded by lavender fields and French countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 1500,
    location: "Provence",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [5.4474, 43.5298],
    },
    category: "farms",
  },
  {
    title: "Kerala Spice Plantation Villa",
    description:
      "Stay in a luxury villa surrounded by pepper, cardamom, and tea plantations in God's own country.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 1200,
    location: "Munnar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889],
    },
    category: "farms",
  },
  {
    title: "Safari Ranch in Kenya",
    description:
      "Stay on a working ranch with views of the African savanna. Spot zebras and giraffes from your porch.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 3500,
    location: "Naivasha",
    country: "Kenya",
    geometry: {
      type: "Point",
      coordinates: [36.4330, -0.7174],
    },
    category: "farms",
  },

  // ========================
  // 🏙️ CATEGORY: iconic cities
  // ========================
  {
    title: "Penthouse Loft in New York City",
    description:
      "Live the Manhattan dream in this stylish penthouse with floor-to-ceiling windows and skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 5000,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
    category: "iconic cities",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment near Shibuya crossing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
    category: "iconic cities",
  },
  {
    title: "Houseboat on Amsterdam Canals",
    description:
      "Float through history on a beautifully restored houseboat in Amsterdam's iconic canal ring.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    prize: 2400,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.8952, 52.3702],
    },
    category: "iconic cities",
  },
  {
    title: "Charming Flat near the Eiffel Tower",
    description:
      "Wake up to views of the Eiffel Tower from this beautifully designed Parisian apartment in the 7th arrondissement.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 3000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
    category: "iconic cities",
  },

  // ========================
  // 🔥 CATEGORY: trending
  // ========================
  {
    title: "Desert Dome in Joshua Tree",
    description:
      "Sleep under the stars in a geodesic dome in the middle of the desert. Minimalist luxury at its finest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 1800,
    location: "Joshua Tree",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-116.3131, 34.1347],
    },
    category: "trending",
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description:
      "The ultimate tropical getaway. Crystal clear lagoon water right below your private deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 8000,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004],
    },
    category: "trending",
  },
  {
    title: "Glass Igloo in Finland",
    description:
      "Watch the Northern Lights from the comfort of your heated glass igloo. A bucket-list experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 4200,
    location: "Rovaniemi",
    country: "Finland",
    geometry: {
      type: "Point",
      coordinates: [25.7482, 66.5039],
    },
    category: "trending",
  },
  {
    title: "Eco Pod in Tulum",
    description:
      "Sustainable luxury on the Riviera Maya. Bamboo architecture, cenote access, and jungle vibes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 2600,
    location: "Tulum",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-87.4631, 20.2115],
    },
    category: "trending",
  },

  // ========================
  // 🌀 CATEGORY: others
  // ========================
  {
    title: "Treehouse Hideaway in Costa Rica",
    description:
      "Live among the treetops in this handcrafted treehouse deep in the Costa Rican rainforest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 900,
    location: "Monteverde",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.8294, 10.3157],
    },
    category: "others",
  },
  {
    title: "Underground Cave Hotel in Cappadocia",
    description:
      "Sleep in an ancient cave carved into the rock. Wake up to hot air balloons floating above the fairy chimneys.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 1600,
    location: "Goreme",
    country: "Turkey",
    geometry: {
      type: "Point",
      coordinates: [34.8289, 38.6431],
    },
    category: "others",
  },
  {
    title: "Floating Houseboat in Kerala",
    description:
      "Cruise through the serene backwaters of Alleppey on a traditional Kerala houseboat with all modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 1100,
    location: "Alleppey",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981],
    },
    category: "others",
  },
  {
    title: "Converted Lighthouse in Portugal",
    description:
      "Stay in a historic lighthouse perched on the Atlantic cliffs. Dramatic ocean views guaranteed.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 2000,
    location: "Sintra",
    country: "Portugal",
    geometry: {
      type: "Point",
      coordinates: [-9.3817, 38.7913],
    },
    category: "others",
  },

  // ========================
  // 🏰 CATEGORY: castles
  // ========================
  {
    title: "Medieval Castle in Scotland",
    description:
      "Live like royalty in this 13th-century Scottish castle complete with towers, a great hall, and sprawling gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 6000,
    location: "Edinburgh",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    category: "castles",
  },
  {
    title: "Fairy-Tale Chateau in Loire Valley",
    description:
      "Step into a fairytale at this stunning French chateau surrounded by manicured gardens and a private lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    prize: 5500,
    location: "Loire Valley",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [1.2551, 47.3941],
    },
    category: "castles",
  },
  {
    title: "Rajasthani Palace in Jaipur",
    description:
      "Experience the grandeur of Rajputana royalty in this heritage palace with hand-painted murals and courtyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 4000,
    location: "Jaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
    category: "castles",
  },

  // ========================
  // 🏊 CATEGORY: amazing pools
  // ========================
  {
    title: "Infinity Pool Villa in Santorini",
    description:
      "Watch the legendary Santorini sunset from your private infinity pool overlooking the caldera.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 4500,
    location: "Santorini",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932],
    },
    category: "amazing pools",
  },
  {
    title: "Luxury Overwater Villa in Maldives",
    description:
      "Step directly from your villa into the turquoise Indian Ocean. Includes a glass-bottom floor and private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 9000,
    location: "Male",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.5093, 4.1755],
    },
    category: "amazing pools",
  },
  {
    title: "Beachfront Resort in Bali",
    description:
      "Relax in a private pool villa steps from the ocean. Balinese architecture meets modern luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 3200,
    location: "Ubud",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069],
    },
    category: "amazing pools",
  },
  {
    title: "Cliffside Pool Villa in Amalfi Coast",
    description:
      "Perched on the dramatic Amalfi cliffs, this villa features a stunning rock-carved pool with Mediterranean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    prize: 5200,
    location: "Positano",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [14.4840, 40.6281],
    },
    category: "amazing pools",
  },
];

module.exports = { data: sampleListings };