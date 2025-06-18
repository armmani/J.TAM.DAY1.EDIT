import express from "express";
import cors from "cors";
import morgan from "morgan";
//Routing
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js"

const app = express();

// Basic Middlewares
app.use(cors()); // Allow cross domains
app.use(morgan("dev")); // show logs
app.use(express.json()); // for read body

// Routing GET PUT POST PATCH DELETE
// app.get("/", (req, res) => {
//   //code body
//   res.json({ message: "Hello CC20" });
// });
app.use("/api", userRouter);
app.use("/auth", authRouter);

const PORT = 8000;
// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
