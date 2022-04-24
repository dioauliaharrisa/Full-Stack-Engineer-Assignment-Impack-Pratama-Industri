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

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findByPk(id);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code, description, price, unit } = req.body;
    // console.log(name, code, description, price);
    const data = await Product.update(
      { name, code, description, price, unit },
      { where: { id } }
    );
    // console.log(data);
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, code, description, price, unit } = req.body;
    // console.log(name, code, description, price);
    const data = await Product.create({ name, code, description, price, unit });
    // console.log(data);
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.status(201).json("deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Impack Pratama server is running on port ${PORT}.`);
});
