const express = require("express");
const router = express.Router();
const Grievance = require("../models/Grievance");
const auth = require("../middleware/auth");

// CREATE
router.post("/", auth, async (req, res) => {
  try {
    const grievance = new Grievance({
      ...req.body,
      user: req.user
    });

    await grievance.save();
    res.json(grievance);

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL
router.get("/", auth, async (req, res) => {
  const data = await Grievance.find({ user: req.user });
  res.json(data);
});

// GET BY ID
router.get("/:id", auth, async (req, res) => {
  const data = await Grievance.findById(req.params.id);
  res.json(data);
});

// UPDATE
router.put("/:id", auth, async (req, res) => {
  const updated = await Grievance.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  await Grievance.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted successfully" });
});

// SEARCH
router.get("/search", auth, async (req, res) => {
  const { title } = req.query;

  const results = await Grievance.find({
    title: { $regex: title, $options: "i" },
    user: req.user
  });

  res.json(results);
});

module.exports = router;