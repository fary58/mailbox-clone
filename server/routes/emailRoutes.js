const express = require('express');
const { Email } = require('../models/emailModel'); // Assuming you have a model for Email
const router = express.Router();

// Create email endpoint
router.post('/create-email', async (req, res) => {
    try {
        const userId = req.id; // Assuming the user ID is available in req.id, e.g., from middleware
        const { to, subject, message } = req.body;

        // Validate request body
        if (!to || !subject || !message) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Create email
        const email = await Email.create({
            to,
            subject,
            message,
            userId
        });

        return res.status(201).json({
            email
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
});

// Delete email endpoint
router.delete('/delete-email/:id', async (req, res) => {
    try {
        const emailId = req.params.id;

        // Validate email ID
        if (!emailId) {
            return res.status(400).json({ message: "Email ID is required" });
        }

        // Find and delete the email
        const email = await Email.findByIdAndDelete(emailId);

        if (!email) {
            return res.status(404).json({ message: "Email not found" });
        }

        return res.status(200).json({
            message: "Email deleted successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
});

// Get all emails for a specific user
router.get('/get-emails', async (req, res) => {
    try {
        const userId = req.id; // Assuming the user ID is available in req.id

        // Find emails by user ID
        const emails = await Email.find({ userId });

        return res.status(200).json({ emails });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
});

module.exports = router;