const { Travel } = require("../../models/travel");
const express = require("express");
const router = express.Router();

//get travels
router.get("/", async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json(travels);
  } catch (error) {
    res.status(500).json({ error: "Failed to get Travels" });
  }
});

//get travel by id
router.get("/:id", async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).send("Travel not found");
    }
    res.status(200).json(travel);
  } catch (error) {
    res.status(500).json({ error: "Failed to get Travel" });
  }
});

module.exports = router;