const express = require("express");
const router = express.Router();
const { formatRoman } = require("../utils/formatRoman");

// [GET] Convert number to Roman number (SSE)
router.get("/roma-sse", (req, res) => {
  const { number } = req.query;
  const num = parseInt(number);

  // Set Header for SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    const result = formatRoman(num);
    res.write(`data: ${JSON.stringify({ result })}\n\n`); // Send the Roman number
  } catch (error) {
    console.error(error);
    res.write(
      `data: ${JSON.stringify({ error: "Internal server error" })}\n\n`
    ); // Send the error
  } finally {
    res.end(); // Close the stream
  }
});

module.exports = router;
