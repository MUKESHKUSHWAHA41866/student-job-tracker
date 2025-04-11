const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Create a new job application
router.post('/', async (req, res) => {
  try {
    const application = new Application(req.body);
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// List all applications with optional filters (status, date)
router.get('/', async (req, res) => {
  const { status, startDate, endDate } = req.query;
  const query = {};
  
  if (status) {
    query.status = status;
  }
  if (startDate || endDate) {
    query.dateOfApplication = {};
    if (startDate) {
      query.dateOfApplication.$gte = new Date(startDate);
    }
    if (endDate) {
      query.dateOfApplication.$lte = new Date(endDate);
    }
  }
  
  try {
    const applications = await Application.find(query).sort({ dateOfApplication: -1 });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update status of a job application
router.patch('/:id', async (req, res) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!updatedApplication) return res.status(404).json({ message: "Application not found" });
    res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a job application
router.delete('/:id', async (req, res) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(req.params.id);
    if (!deletedApplication) return res.status(404).json({ message: "Application not found" });
    res.status(200).json({ message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
