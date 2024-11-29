import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js"; // Import the User model if needed for database lookup

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token; // Fetch the token from cookies
  if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });

    // Retrieve user information from the database
    const user = await User.findById(decoded.userId).select("role"); // Only select the 'role' field
    if (!user) return res.status(401).json({ success: false, message: "Unauthorized - user not found" });

    req.user = user; // Attach user info (including role) to the request object
    next();
  } catch (error) {
    console.log("Error in verifyToken ", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
