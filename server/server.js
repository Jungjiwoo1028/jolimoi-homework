// Import
const cors = require("cors");
const express = require("express");
const formatRomaRouter = require("./routers/formatRomaRouter.js");

// Create an Express app instance
const app = express();
const PORT = 8000;

// Enable CORS for all requests
app.use(cors());
// To parse incoming JSON request
app.use(express.json());

// Router
app.use("/format", formatRomaRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
