import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

// Connect MongoDB
import { connectMongoDB } from "./src/config/dbConfig.js";
connectMongoDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// static serving
import path from "path";
const __dirname = path.resolve();

// serve the static files from the node
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

console.log(__dirname);

import taskRouter from "./src/routers/taskRouter.js";
import { log } from "console";
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
