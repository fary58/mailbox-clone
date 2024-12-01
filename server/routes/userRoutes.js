const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel'); // Assuming you have a User model defined
const router = express.Router();

// Register endpoint
router.post('/register', async (req, res) => {

    try {
        const { fullname, email, password } = req.body;
        // Validate request body
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists with this email", success: false });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Set default profile photo
        const profilePhoto = `https://avatar.iran.liara.run/public/girl`;

        // Create new user
        await User.create({
            fullname,
            email,
            password: hashedPassword,
            profilePhoto
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
});

// Logout endpoint
router.post('/logout', async (req, res) => {
    try {
        // Clear the token cookie
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
});

module.exports = router;
