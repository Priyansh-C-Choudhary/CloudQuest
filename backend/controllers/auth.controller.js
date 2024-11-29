import bcryptjs from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
	sendPasswordResetEmail,
	sendResetSuccessEmail,
	sendVerificationEmail,
	sendWelcomeEmail,
} from "../mailtrap/emails.js";
import { User } from "../models/user.model.js";

export const signup = async (req, res) => {
	const { email, password, name, role } = req.body; // Accept role
  
	try {
	  if (!email || !password || !name) {
		throw new Error("All fields are required");
	  }
  
	  const userAlreadyExists = await User.findOne({ email });
	  if (userAlreadyExists) {
		return res.status(400).json({ success: false, message: "User already exists" });
	  }
  
	  const hashedPassword = await bcryptjs.hash(password, 10);
	  const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
  
	  const user = new User({
		email,
		password: hashedPassword,
		name,
		role: role || 'user', // Default to 'user' if no role is provided
		verificationToken,
		verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
	  });
  
	  await user.save();
  
	  generateTokenAndSetCookie(res, user._id);
  
	  await sendVerificationEmail(user.email, verificationToken);
  
	  res.status(201).json({
		success: true,
		message: "User created successfully",
		user: {
		  ...user._doc,
		  password: undefined, // Don't expose password
		},
	  });
	} catch (error) {
	  res.status(400).json({ success: false, message: error.message });
	}
  };

export const verifyEmail = async (req, res) => {
	const { code } = req.body;
	try {
		const user = await User.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
		}

		user.isVerified = true;
		user.verificationToken = undefined;
		user.verificationTokenExpiresAt = undefined;
		await user.save();

		await sendWelcomeEmail(user.email, user.name);

		res.status(200).json({
			success: true,
			message: "Email verified successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;
  
	try {
		// Find the user in the database by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
  
		// Validate the provided password
		const isPasswordValid = await bcryptjs.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		// Generate the token
		const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
			expiresIn: "7d", // Token expiration: 7 days
		});
  
		// Optionally: Set the token as an HTTP-only cookie for better security
		res.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		});

		// Update user's last login time
		user.lastLogin = new Date();
		await user.save();
  
		// Return user data and the token in the response
		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			token, // Include token in response body
			user: {
				...user._doc,
				password: undefined, // Do not expose the password
			},
		});
	} catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};


export const logout = async (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};

export const forgotPassword = async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		// Generate reset token
		const resetToken = crypto.randomBytes(20).toString("hex");
		const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

		user.resetPasswordToken = resetToken;
		user.resetPasswordExpiresAt = resetTokenExpiresAt;

		await user.save();

		// send email
		await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

		res.status(200).json({ success: true, message: "Password reset link sent to your email" });
	} catch (error) {
		console.log("Error in forgotPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

export const resetPassword = async (req, res) => {
	try {
		const { token } = req.params;
		const { password } = req.body;

		const user = await User.findOne({
			resetPasswordToken: token,
			resetPasswordExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
		}

		// update password
		const hashedPassword = await bcryptjs.hash(password, 10);

		user.password = hashedPassword;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpiresAt = undefined;
		await user.save();

		await sendResetSuccessEmail(user.email);

		res.status(200).json({ success: true, message: "Password reset successful" });
	} catch (error) {
		console.log("Error in resetPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

export const checkAuth = async (req, res) => {
	try {
	  const user = await User.findById(req.userId).select("-password"); // Exclude the password
	  if (!user) {
		return res.status(400).json({ success: false, message: "User not found" });
	  }
  
	  res.status(200).json({
		success: true,
		user, // This will include the `role` field
	  });
	} catch (error) {
	  console.log("Error in checkAuth ", error);
	  res.status(400).json({ success: false, message: error.message });
	}
  };
  
