import express from "express";
const router = express.Router();
import {
  insertTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../models/taskModel/TaskSchema.js";

// router.all("/", (req, res, next) => {
//   // do your code
//   // res.json({
//   //   status: "success",
//   //   message: "response from all",
//   // });
//   next();
// });

// database table selecting

router.get("/", async (req, res, next) => {
  try {
    // do your code
    const tasks = await getTasks();

    res.json({
      status: "success",
      message: "Here is the tasks list ",
      tasks: tasks,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res, next) => {
  try {
    // do your code

    // insert task
    const result = await insertTask(req.body);

    res.json({
      status: "success",
      message: "New task has been added successfully",
      task: result,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.patch("/", async (req, res, next) => {
  try {
    // do your code
    const { _id, ...rest } = req.body;
    const result = await updateTask(_id, rest);

    res.json({
      status: "success",
      message: "Your task has been updated",
      task: result,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    // do your code
    const { _id } = req.params;
    const result = await deleteTask(_id);

    res.json({
      status: "success",
      message: "Your task has been deleted",
      result,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
