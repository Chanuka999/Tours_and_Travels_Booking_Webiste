import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tour.js";
import userRoute from "./routes/users.js";
//import authRoute from "./routes/auth.js";

const app = express();
const port = 4000;

// MongoDB connection (Compass/localhost)
const mongoURL = "mongodb://localhost:27017/tour-booking";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDB connection failed");
});

connection.once("open", () => {
  console.log("MongoDB connection successful (localhost)");
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());
//app.use("/auth", authRoute);
app.use("/tours", tourRoute);
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
