const express = require("express");
const chats = require("./Data/data");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./Routes/userRoutes");
const { notFound, errorHandler } =require("./middlewares/errorMiddleware");

app.use(cors());
dotenv.config();
connectDB();

app.use(express.json()); //To acccept json Data....!

app.get("/", (req, res) => {
  res.send("Hello Niyad.....!");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server running on PORT :", PORT));
