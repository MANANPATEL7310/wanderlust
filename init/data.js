const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
    categories: ["Beach", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
    categories: ["City", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
    categories: ["Mountain", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    categories: ["Farms", "Unique"],
    averageRating: 0,
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
    categories: ["Unique", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
    categories: ["Beach", "Pools"],
    averageRating: 0,
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.043, 39.0968] },
    categories: ["Lakefront", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
    categories: ["City", "Hotels"],
    averageRating: 0,
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2333, 46.1] },
    categories: ["Mountain", "Arctic"],
    averageRating: 0,
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
    categories: ["Farms", "Unique"],
    averageRating: 0,
  },
  {
    title: "Countryside Farmhouse Stay",
    description:
      "Relax in the peaceful countryside and experience authentic farm life in this cozy farmhouse.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Yorkshire",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.0803, 53.9583] },
    categories: ["Farms", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Desert Dome Escape",
    description:
      "Sleep under the stars in a luxury desert dome surrounded by dunes and serenity.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1746023841654-2a8249649b08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 1800,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    categories: ["Mountain", "Unique"],
    averageRating: 0,
  },
  {
    title: "Icelandic Glass Cabin",
    description:
      "Stay warm and cozy while enjoying the northern lights in this modern glass cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Reykjavik",
    country: "Iceland",
    geometry: { type: "Point", coordinates: [-21.8174, 64.1265] },
    categories: ["Arctic", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Jungle Tree Villa",
    description:
      "Enjoy an immersive jungle experience in this open-air villa surrounded by lush greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
    categories: ["Beach", "Unique"],
    averageRating: 0,
  },
  {
    title: "Charming Riverside Cabin",
    description:
      "Wake up to the sound of flowing water and enjoy fishing and campfires by the river.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Vancouver",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-123.1216, 49.2827] },
    categories: ["Lakefront", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Elegant Paris Apartment",
    description:
      "Romantic and chic — stay just steps away from the Eiffel Tower in this elegant apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
    categories: ["City", "Hotels"],
    averageRating: 0,
  },
  {
    title: "Overwater Bungalow",
    description:
      "Experience luxury in this floating overwater bungalow surrounded by crystal-clear waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] },
    categories: ["Beach", "Beach"],
    averageRating: 0,
  },
  {
    title: "Alpine Ski Lodge",
    description:
      "Warm up by the fireplace after a day on the slopes in this cozy ski lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Zermatt",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] },
    categories: ["Mountain", "Arctic"],
    averageRating: 0,
  },
  {
    title: "Countryside Stone Cottage",
    description:
      "A peaceful escape surrounded by rolling hills and stone walls — perfect for a slow weekend.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.7206, 51.8333] },
    categories: ["Farms", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Arctic Igloo Experience",
    description:
      "Sleep under the stars and northern lights in a glass igloo in the Arctic Circle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Rovaniemi",
    country: "Finland",
    geometry: { type: "Point", coordinates: [25.726, 66.5039] },
    categories: ["Arctic", "Unique"],
    averageRating: 0,
  },
  {
    title: "Secluded Beach Paradise",
    description:
      "Find your own private piece of paradise on this secluded beachfront property with world-class views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Seychelles",
    country: "Seychelles",
    geometry: { type: "Point", coordinates: [55.5326, -4.6197] },
    categories: ["Beach", "Unique"],
    averageRating: 0,
  },
  {
    title: "Boutique City Loft",
    description:
      "Modern minimalism meets urban living in this beautifully designed loft in the heart of the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
    categories: ["City", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Luxury Yacht Experience",
    description:
      "Set sail on an unforgettable journey aboard this luxurious yacht with all modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Monaco",
    country: "Monaco",
    geometry: { type: "Point", coordinates: [7.4246, 43.7384] },
    categories: ["Boats", "Unique"],
    averageRating: 0,
  },
  {
    title: "Cozy Mountain Cabin",
    description:
      "Retreat to this charming mountain cabin perfect for hiking enthusiasts and nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Colorado Springs",
    country: "United States",
    geometry: { type: "Point", coordinates: [-104.8214, 38.8339] },
    categories: ["Mountain", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Infinity Pool Villa",
    description:
      "Indulge in luxury with stunning infinity pool views and world-class service in this beachside villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.5361, 4.1755] },
    categories: ["Beach", "Pools"],
    averageRating: 0,
  },
  {
    title: "Riverside Glamping Tent",
    description:
      "Experience the great outdoors in comfort with this luxury glamping tent by a flowing river.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1760541740387-e0af5182d805?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    },
    price: 750,
    location: "Yellowstone",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.5885, 44.428] },
    categories: ["Camping", "Lakefront"],
    averageRating: 0,
  },
  {
    title: "Luxury Resort Suite",
    description:
      "Be pampered at this five-star resort with spa access, fine dining, and exceptional hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    categories: ["Hotels", "Pools"],
    averageRating: 0,
  },
  {
    title: "Countryside Vineyard Estate",
    description:
      "Live the good life at this sprawling vineyard estate with wine tastings and scenic landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1760406130563-f779af3a9e4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 3200,
    location: "Napa Valley",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.2869, 38.2975] },
    categories: ["Farms", "Unique"],
    averageRating: 0,
  },
  {
    title: "Arctic Aurora Cabin",
    description:
      "Watch the spectacular northern lights dance across the sky from your cozy Arctic cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Tromsø",
    country: "Norway",
    geometry: { type: "Point", coordinates: [18.9553, 69.6492] },
    categories: ["Arctic", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Mediterranean Villa",
    description:
      "Experience the Mediterranean lifestyle in this stunning white-washed villa overlooking the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Santorini",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.4612, 36.3932] },
    categories: ["Beach", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in a beautifully preserved historic castle with timeless elegance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Edinburgh",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] },
    categories: ["Unique", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Tropical Island Hut",
    description:
      "Embrace island life in this traditional thatched-roof hut surrounded by palm trees and turquoise waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1744261333664-1c80bce2cc58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    price: 1600,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [178.065, -18.1369] },
    categories: ["Beach", "Cabins"],
    averageRating: 0,
  },
  {
    title: "High-Rise Penthouse Suite",
    description:
      "Take in panoramic city views from this luxurious penthouse suite with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Singapore",
    country: "Singapore",
    geometry: { type: "Point", coordinates: [103.8198, 1.3521] },
    categories: ["City", "Hotels"],
    averageRating: 0,
  },
  {
    title: "Desert Oasis Retreat",
    description:
      "Relax in this luxury desert retreat featuring a private oasis and traditional architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Marrakech",
    country: "Morocco",
    geometry: { type: "Point", coordinates: [-7.9811, 31.6295] },
    categories: ["Unique", "Pools"],
    averageRating: 0,
  },
  {
    title: "Waterfront Lake House",
    description:
      "Unwind in this spacious lake house with private dock, perfect for swimming and boating.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Lake Como",
    country: "Italy",
    geometry: { type: "Point", coordinates: [9.1926, 45.9886] },
    categories: ["Lakefront", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Himalayan Mountain Lodge",
    description:
      "Breathtaking mountain views await at this cozy lodge near the world's highest peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Nepal",
    country: "Nepal",
    geometry: { type: "Point", coordinates: [84.124, 28.3949] },
    categories: ["Mountain", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Modern Farmhouse Retreat",
    description:
      "Experience farm life in style at this modern farmhouse with fresh produce and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Provence",
    country: "France",
    geometry: { type: "Point", coordinates: [5.3796, 43.8386] },
    categories: ["Farms", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Rustic Barn Conversion",
    description:
      "Charm meets comfort in this beautifully converted barn with original features and modern luxuries.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Kent",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [0.7276, 51.2794] },
    categories: ["Farms", "Unique"],
    averageRating: 0,
  },
  {
    title: "Boutique Beach Resort",
    description:
      "Relax in luxury at this boutique beach resort with personalized service and tropical vibes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3388, 7.8804] },
    categories: ["Beach", "Hotels"],
    averageRating: 0,
  },
  {
    title: "Alpine Ski Apartment",
    description:
      "Compact and cozy ski apartment steps from the lifts, perfect for couples on a ski vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Chamonix",
    country: "France",
    geometry: { type: "Point", coordinates: [6.8694, 45.9237] },
    categories: ["Mountain", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Urban Loft Apartment",
    description:
      "Stylish loft in the trendiest neighborhood with exposed brick and industrial chic design.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "San Francisco",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.4194, 37.7749] },
    categories: ["City", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Crystal Clear Lagoon Villa",
    description:
      "Direct access to crystal-clear waters in this exclusive lagoon villa with stunning underwater views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.5361, 4.1755] },
    categories: ["Beach", "Pools"],
    averageRating: 0,
  },
  {
    title: "Historic Parisian Apartment",
    description:
      "Live like a local in this charming historic apartment in the heart of Parisian culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1761782791727-3994283faa88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    price: 2900,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
    categories: ["City", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Mountain View Chalet",
    description:
      "Wake up to spectacular mountain views in this modern chalet with floor-to-ceiling windows.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
    categories: ["Mountain", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Seaside Boutique Hotel",
    description:
      "Boutique charm meets coastal luxury at this intimate seaside hotel with ocean-view rooms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Amalfi Coast",
    country: "Italy",
    geometry: { type: "Point", coordinates: [14.6033, 40.634] },
    categories: ["Beach", "Hotels"],
    averageRating: 0,
  },
  {
    title: "Country Estate Guesthouse",
    description:
      "Experience refined country living at this elegant estate guesthouse with manicured gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.7206, 51.8333] },
    categories: ["Farms", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Rooftop Pool Penthouse",
    description:
      "Luxury living redefined with your own rooftop infinity pool and panoramic skyline views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1761365060772-24786653fca8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 5200,
    location: "Miami",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] },
    categories: ["City", "Pools"],
    averageRating: 0,
  },
  {
    title: "Arctic Wilderness Cabin",
    description:
      "Complete isolation in the Arctic wilderness with aurora viewing and snow adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Lapland",
    country: "Finland",
    geometry: { type: "Point", coordinates: [25.726, 66.5039] },
    categories: ["Arctic", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Modern Minimalist Villa",
    description:
      "Sleek design meets tranquility in this stunning minimalist villa with Zen-inspired spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
    categories: ["City", "Unique"],
    averageRating: 0,
  },
  {
    title: "Lighthouse Keeper's Quarters",
    description:
      "Unique stay in a converted lighthouse with 360-degree ocean views and maritime history.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Cape Cod",
    country: "United States",
    geometry: { type: "Point", coordinates: [-70.2497, 41.7834] },
    categories: ["Beach", "Unique"],
    averageRating: 0,
  },
  {
    title: "Tropical Garden Villa",
    description:
      "Hidden gem surrounded by lush tropical gardens with private pool and outdoor living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Ubud",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.3104, -8.5069] },
    categories: ["Beach", "Pools"],
    averageRating: 0,
  },
  {
    title: "Snow-Covered Mountain Hut",
    description:
      "Authentic alpine experience in this cozy mountain hut, perfect for winter sports lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "St. Moritz",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [9.8428, 46.4908] },
    categories: ["Mountain", "Arctic"],
    averageRating: 0,
  },
  {
    title: "Coastal Cliff House",
    description:
      "Dramatic cliffside location with jaw-dropping ocean views and natural rock formations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Big Sur",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.7967, 36.2704] },
    categories: ["Beach", "Unique"],
    averageRating: 0,
  },
  {
    title: "Lakefront Timber Lodge",
    description:
      "Rustic luxury meets lakeside living in this handcrafted timber lodge with natural charm.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Whistler",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-122.956, 50.1163] },
    categories: ["Lakefront", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Bali Rice Terrace Villa",
    description:
      "Peaceful retreat overlooking emerald rice terraces with traditional Balinese architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
    categories: ["Unique", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Contemporary Urban Suite",
    description:
      "Cutting-edge design in the heart of the city with high-tech amenities and sleek aesthetics.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Seoul",
    country: "South Korea",
    geometry: { type: "Point", coordinates: [126.978, 37.5665] },
    categories: ["City", "Hotels"],
    averageRating: 0,
  },
  {
    title: "Desert Camping Experience",
    description:
      "Authentic desert camping under the stars with camel rides and traditional Bedouin hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Wadi Rum",
    country: "Jordan",
    geometry: { type: "Point", coordinates: [35.4167, 29.5833] },
    categories: ["Camping", "Mountain"],
    averageRating: 0,
  },
  {
    title: "Tropical Resort Bungalow",
    description:
      "Escape to paradise in these traditional thatched bungalows on a pristine white-sand beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Tahiti",
    country: "French Polynesia",
    geometry: { type: "Point", coordinates: [-149.4068, -17.6599] },
    categories: ["Beach", "Boats"],
    averageRating: 0,
  },
  {
    title: "Historic Winery Guesthouse",
    description:
      "Stay at a working winery with daily tastings, vineyard tours, and elegant rustic rooms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Bordeaux",
    country: "France",
    geometry: { type: "Point", coordinates: [-0.5792, 44.8378] },
    categories: ["Farms", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Oceanfront Glass House",
    description:
      "Modern architectural masterpiece with glass walls and direct access to a private beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Sydney",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] },
    categories: ["Beach", "Unique"],
    averageRating: 0,
  },
  {
    title: "Alpine A-Frame Cabin",
    description:
      "Quaint A-frame cabin nestled in the mountains, perfect for romantic getaways.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Park City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-111.4979, 40.6461] },
    categories: ["Mountain", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Lakefront Fishing Cabin",
    description:
      "Angler's paradise with private dock, fishing gear, and stunning sunrise lake views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Minnesota",
    country: "United States",
    geometry: { type: "Point", coordinates: [-93.265, 44.9778] },
    categories: ["Lakefront", "Farms"],
    averageRating: 0,
  },
  {
    title: "Temple View Apartment",
    description:
      "Cultural immersion in this charming apartment with views of ancient temples.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1761562964782-4c971df72d29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 950,
    location: "Bagan",
    country: "Myanmar",
    geometry: { type: "Point", coordinates: [94.8579, 21.1717] },
    categories: ["City", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Golf Resort Suite",
    description:
      "Perfect for golf enthusiasts with course access, clubhouse amenities, and resort luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1761828122700-11b752d69a88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 3300,
    location: "Pebble Beach",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.9667, 36.5634] },
    categories: ["Farms", "Unique"],
    averageRating: 0,
  },
  {
    title: "Jungle Eco-Lodge",
    description:
      "Sustainable luxury in the heart of the jungle with wildlife viewing and eco-friendly design.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1761753481927-f6b701ac2c07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    price: 2500,
    location: "Amazon Rainforest",
    country: "Brazil",
    geometry: { type: "Point", coordinates: [-62.8261, -3.4653] },
    categories: ["Unique", "Camping"],
    averageRating: 0,
  },
  {
    title: "Venetian Canal Apartment",
    description:
      "Charming Venetian apartment overlooking historic canals in the world's most romantic city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Venice",
    country: "Italy",
    geometry: { type: "Point", coordinates: [12.3155, 45.4408] },
    categories: ["City", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Surf Beach Bungalow",
    description:
      "Ride the perfect waves from this surf-friendly bungalow with board storage and beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Hossegor",
    country: "France",
    geometry: { type: "Point", coordinates: [-1.3926, 43.6536] },
    categories: ["Beach", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Himalayan Tea House",
    description:
      "Authentic mountain tea house with traditional hospitality and breathtaking mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531147646552-1eec68116469?auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Nepal",
    country: "Nepal",
    geometry: { type: "Point", coordinates: [84.124, 28.3949] },
    categories: ["Mountain", "Rooms"],
    averageRating: 0,
  },
  {
    title: "Private Island Retreat",
    description:
      "Ultimate exclusivity on your own private island with butler service and all-inclusive luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.5361, 4.1755] },
    categories: ["Beach", "Unique"],
    averageRating: 0,
  },
  {
    title: "Snow Lodge Experience",
    description:
      "Cozy snow lodge with outdoor hot tub and winter wonderland atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Åre",
    country: "Sweden",
    geometry: { type: "Point", coordinates: [13.0799, 63.3985] },
    categories: ["Arctic", "Cabins"],
    averageRating: 0,
  },
  {
    title: "Historic Monastery Stay",
    description:
      "Peaceful retreat in a converted monastery with meditation gardens and spiritual serenity.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1759484628323-142ec8547fb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 1100,
    location: "Montserrat",
    country: "Spain",
    geometry: { type: "Point", coordinates: [1.8344, 41.5957] },
    categories: ["Mountain", "Unique"],
    averageRating: 0,
  },
  {
    title: "Riverside Teahouse",
    description:
      "Traditional teahouse with authentic ceremonies and peaceful riverside setting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1736618625357-2a7f197f8c23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 600,
    location: "Kyoto",
    country: "Japan",
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
    categories: ["City", "Unique"],
    averageRating: 0,
  },
  {
    title: "Mountain Biking Basecamp",
    description:
      "Adventure hub for mountain biking enthusiasts with trails starting at your door.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1760541740387-e0af5182d805?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    },
    price: 1000,
    location: "Moab",
    country: "United States",
    geometry: { type: "Point", coordinates: [-109.5498, 38.5733] },
    categories: ["Mountain", "Camping"],
    averageRating: 0,
  },
  {
    title: "Coastal Ranch House",
    description:
      "Spacious ranch house on the coast with horseback riding and sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1748324575310-da3bd664e20e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    price: 2100,
    location: "Big Sur",
    country: "United States",
    geometry: { type: "Point", coordinates: [-121.7967, 36.2704] },
    categories: ["Farms", "Beach"],
    averageRating: 0,
  },
];

module.exports = { data: sampleListings };
