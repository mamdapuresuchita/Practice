const express = require("express");
const cors = require("cors");
require("dotenv").config();
const taskRouter = require("./routes/taskRoute");
const userRoutes = require("./routes/userRoute")
const {testConnection} = require('./config/db')
testConnection();



const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hii"));
app.use("/api/task", taskRouter);
app.use("/api/user",userRoutes);


app.listen(port, () => console.log(`Running on Port ${port}`));
