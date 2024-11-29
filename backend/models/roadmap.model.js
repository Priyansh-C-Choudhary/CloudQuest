import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema(
  {
    tool: {
      type: String,
      required: true,
      unique: true, // Each tool has one roadmap
    },
    content: {
      type: String, // Content will be stored as HTML or JSON (Tiptap output)
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Tracks which user last updated the roadmap
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Roadmap = mongoose.model("Roadmap", roadmapSchema);
