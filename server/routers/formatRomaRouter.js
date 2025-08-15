const express = require("express");
const router = express.Router();
const { formatRoman } = require("../utils/formatRoman");

// [POST] Convert number to Roman number (AJAX)
router.post("/roma-ajax", (req, res) => {
  try {
    const result = formatRoman(req.body.number);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
