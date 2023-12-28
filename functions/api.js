const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

// Sample perfume product data
const perfumeData = [
  {
    _id: "1",
    name: "Floral Elegance",
    brand: "Luxury Scents",
    image_link:
      "http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg",
    price: 75.0,
    rating: 4.7,
    description:
      "Experience the enchanting blend of floral notes with Floral Elegance. A fragrance that captivates and leaves a lasting impression.",
    product_colors: [
      { hex_value: "#FF69B4", shade_name: "Pink Blossom" },
      { hex_value: "#87CEFA", shade_name: "Blue Sky" },
      { hex_value: "#FFD700", shade_name: "Golden Sunshine" },
    ],
  },
  {
    _id: "2",
    name: "Mystic Woods",
    brand: "Nature's Essence",
    image_link:
      "http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg",
    price: 89.0,
    rating: 4.5,
    description:
      "Embark on a mystical journey with Mystic Woods. This fragrance combines woody and oriental notes for a captivating scent.",
    product_colors: [
      { hex_value: "#8B4513", shade_name: "Deep Oak" },
      { hex_value: "#556B2F", shade_name: "Forest Green" },
      { hex_value: "#A52A2A", shade_name: "Mahogany" },
    ],
  },
  {
    _id: "3",
    name: "Citrus Zest",
    brand: "Sunshine Scents",
    image_link:
      "http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg",
    price: 65.0,
    rating: 4.2,
    description:
      "Revitalize your senses with Citrus Zest. A burst of citrusy goodness that uplifts and energizes your day.",
    product_colors: [
      { hex_value: "#FFA500", shade_name: "Orange Burst" },
      { hex_value: "#FFFF00", shade_name: "Lemon Splash" },
      { hex_value: "#32CD32", shade_name: "Lime Zing" },
    ],
  },
];

//Get all students
router.get("/", (req, res) => {
  res.json(perfumeData);
});

//Create new record
router.post("/add", (req, res) => {
  res.send("New record added.");
});

//delete existing record
router.delete("/", (req, res) => {
  res.send("Deleted existing record");
});

//updating existing record
router.put("/", (req, res) => {
  res.send("Updating existing record");
});

//showing demo records
router.get("/demo", (req, res) => {
  res.json([
    {
      id: "001",
      name: "Smith",
      email: "smith@gmail.com",
    },
    {
      id: "002",
      name: "Sam",
      email: "sam@gmail.com",
    },
    {
      id: "003",
      name: "lily",
      email: "lily@gmail.com",
    },
  ]);
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
