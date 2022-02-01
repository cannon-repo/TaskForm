const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const RootRoutes = require("./Routes/RootRoutes");


dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`))).catch((err) => console.log('Server crashed',err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", RootRoutes);