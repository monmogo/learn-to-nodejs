const express = require("express");
const mongoose = require("mongoose");
const app = express();

const db = require("./config/key.js").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`SERVER RUN WITH PORT ${PORT}`));
