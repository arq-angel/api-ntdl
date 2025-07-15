import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      required: true,
      type: String,
    },
    hr: {
      required: true,
      type: Number,
      min: 1,
      max: [100, "Are you sure boss, it seems too many hours"],
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  {
    timestamps: true,
  }
);

const TaskCollection = mongoose.model("Task", taskSchema);

export const insertTask = (taskObj) => {
  return TaskCollection(taskObj).save();
};

export const getTasks = () => {
  return TaskCollection.find();
};

export const updateTask = (_id, rest) => {
  return TaskCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
};

export const deleteTask = (_id) => {
  return TaskCollection.findByIdAndDelete(_id);
};
