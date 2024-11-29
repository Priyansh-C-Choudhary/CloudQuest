import { Roadmap } from "../models/roadmap.model.js";

// Fetch roadmap content for a tool
export const getRoadmap = async (req, res) => {
  const { tool } = req.params;

  try {
    const roadmap = await Roadmap.findOne({ tool });
    if (!roadmap) {
      return res.status(404).json({ success: false, message: "Roadmap not found" });
    }
    res.status(200).json({ success: true, roadmap });
  } catch (error) {
    console.error("Error fetching roadmap:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Save or update roadmap content
export const saveRoadmap = async (req, res) => {
  const { tool } = req.params;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ success: false, message: "Content is required" });
  }

  try {
    let roadmap = await Roadmap.findOne({ tool });

    if (!roadmap) {
      // Create new roadmap if it doesn't exist
      roadmap = new Roadmap({
        tool,
        content,
        updatedBy: req.userId, // From verifyToken middleware
      });
    } else {
      // Update existing roadmap
      roadmap.content = content;
      roadmap.updatedBy = req.userId;
      roadmap.lastUpdated = Date.now();
    }

    await roadmap.save();
    res.status(200).json({ success: true, message: "Roadmap saved successfully", roadmap });
  } catch (error) {
    console.error("Error saving roadmap:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
