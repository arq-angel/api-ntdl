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

let fakeDB = [
  {
    id: 1,
    task: "Coding",
    hr: 40,
    type: "entry",
  },
  {
    id: 2,
    task: "Gaming",
    hr: 40,
    type: "entry",
  },
  {
    id: 3,
    task: "Cooking",
    hr: 40,
    type: "entry",
  },
  {
    id: 4,
    task: "Washing",
    hr: 40,
    type: "entry",
  },
];

router.get("/", (req, res, next) => {
  // do your code
  res.json({
    status: "success",
    message: "Here is the tasks list ",
    tasks: fakeDB,
  });
});

router.post("/", (req, res, next) => {
  // do your code
  fakeDB.push(req.body);
  console.log(fakeDB);

  res.json({
    status: "success",
    message: "New task has been added successfully",
  });
});

router.patch("/", (req, res, next) => {
  // do your code
  const { id, type } = req.body;

  fakeDB = fakeDB.map((item) => {
    if (item.id === id) {
      item.type = type;
      return item;
    } else {
      return item;
    }
  });

  res.json({
    status: "success",
    message: "Your task has been updated",
  });
});

router.delete("/:id", (req, res, next) => {
  // do your code

  const { id } = req.params;

  fakeDB = fakeDB.filter((item) => item.id !== +id);

  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});

export default router;
