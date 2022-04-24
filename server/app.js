const express = require("express");
const cors = require("cors");
const { Product } = require("./models/index");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Impack Pratama server." });
});

app.get("/products", async (req, res) => {
  try {
    const data = await Product.findAll();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Impack Pratama server is running on port ${PORT}.`);
});
