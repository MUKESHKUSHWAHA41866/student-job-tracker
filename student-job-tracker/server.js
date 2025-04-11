require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB (using MongoDB Atlas URL from .env)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

// API routes
const applicationsRoute = require('./routes/applications');
app.use('/api/applications', applicationsRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
