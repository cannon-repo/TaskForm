const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`))).catch((err) => console.log('Server crashed',err));

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));