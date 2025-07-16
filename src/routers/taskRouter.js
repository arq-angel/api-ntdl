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

    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added successfully",
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to add the task, try again later",
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

    result?._id
      ? res.json({
          status: "success",
          message: "Your task has been updated",
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to update the task, try again later",
        });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res, next) => {
  try {
    // do your code
    console.log(req.body);
    const { ids } = req.body;
    const result = await deleteTask(ids);

    console.log(result);

    result?.deletedCount
      ? res.json({
          status: "success",
          message: "Your task(s) has been deleted",
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to delete task(s), try again later",
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
