const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

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

// Endpoint to get all perfume products
app.get("/product", (req, res) => {
  res.json(perfumeData);
});

// Endpoint to get a specific perfume product by ID
app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  const product = perfumeData.find((item) => item._id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
