const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/convert", (req, res) => {
  console.log("Received input data:", req.body);
  res.json({ prediction: ["Sample Response"] }); 
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
