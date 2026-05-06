require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Root Route (for Render check)
app.get("/health", (req, res) => {
  res.send("🚀 Grievance Backend is Running Successfully");
});

app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});

// ✅ Import Routes
const authRoutes = require("./routes/auth");
const grievanceRoutes = require("./routes/grievance");

// ✅ Use Routes
app.use("/api", authRoutes);
app.use("/api/grievances", grievanceRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ✅ Port Setup (Render compatible)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});