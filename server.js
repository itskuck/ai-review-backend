const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const Business = require('./models/Business');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.get('/api/business/:slug', async (req, res) => {
  try {
    const biz = await Business.findOne({ slug: req.params.slug });
    if (!biz) return res.status(404).json({ error: "Business not found" });
    res.json(biz);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));