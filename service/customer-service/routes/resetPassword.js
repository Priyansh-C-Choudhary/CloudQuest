const Guest = require("../models/guest");
const Token = require("../models/forgetPasswordToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        // Check if the user exists in the Guest collection
        var user = await Guest.findOne({ userName: req.body.userName });
        if (!user) {
            return res.status(400).send("User with the given username doesn't exist");
        }

        // Check if a token exists for the user, if not, create one
        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        // Create the reset link
        const link = `http://localhost:${process.env.port}/api/password-reset/${user._id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);

        res.send("Password reset link sent to your email account");
    } catch (error) {
        res.status(500).send("An error occurred");
        console.log(error);
    }
});

router.post("/:userId/:token", async (req, res) => {
    try {
        // Find the user by ID in the Guest collection
        var user = await Guest.findById(req.params.userId);
        if (!user) {
            return res.status(400).send("Invalid link or expired");
        }

        // Check if the token exists and is valid
        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link or expired");

        // Update the user's password
        user.password = req.body.password;
        await user.save();
        await token.delete();

        res.send("Password reset successfully.");
    } catch (error) {
        res.status(500).send("An error occurred");
        console.log(error);
    }
});

module.exports = router;
