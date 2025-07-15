import express from "express";

const router = express.Router();

// router.all("/", (req, res, next) => {
//   // do your code
//   // res.json({
//   //   status: "success",
//   //   message: "response from all",
//   // });

//   next();
// });

router.get("/", (req, res, next) => {
  // do your code

  res.json({
    status: "success",
    message: "Here is the tasks list ",
  });
});

router.post("/", (req, res, next) => {
  // do your code

  res.json({
    status: "success",
    message: "New task has been added successfully",
  });
});

router.patch("/", (req, res, next) => {
  // do your code
  const { id, type } = req.body;

  res.json({
    status: "success",
    message: "Your task has been updated",
  });
});

router.delete("/:id", (req, res, next) => {
  // do your code
  const { id } = req.params;

  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});

export default router;
