import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.json());

import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
