import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Todos || mongoose.model("Todos", taskSchema);
