const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const db = require("./config/key.js").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
//TEST model
const User = require("./model/User");
const userPut = {
    username: "nguyenminhtuan",
    password: "123456",
    role: "admin",
};
const user = new User(userPut);
user.save((err, data) => {
    if (err) console.log(err);
    console.log(data);
});
app.use("/", require("./router/User"));
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`SERVER RUN WITH PORT ${PORT}`));
