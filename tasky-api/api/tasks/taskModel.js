import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title:  String,
  description:  String ,
  deadline: Date,
  done: Boolean,
  // accept "low", "medium", "high" as well as "Low", "Medium", "High"
  priority: { type: String, enum: ["Low", "Medium", "High", "low", "medium", "high"] },
  created_at: Date,
  updated_at: Date
});

export default mongoose.model('Task', TaskSchema);
