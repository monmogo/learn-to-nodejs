const express = require("express");
const userRouter = express.Router();
const JWT = require("jsonwebtoken");
const passport = require("passport");
const User = require("../model/User");
userRouter.post("/register", (req, res) => {
    const { username, password, role } = req.body;
    //check user
    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({
                message: { msgBody: "Error", msgBody: true },
            });
        if (user)
            res.status(400).json({
                message: { msgBody: "Ten dang nhap da ton tai", msgBody: true },
            });
        else {
            const newUser = new User({ username, password, role });
            newUser.save((err) => {
                if (err)
                    res.status(500).json({
                        message: { msgBody: "Error", msgBody: true },
                    });
                if (user)
                    res.status(200).json({
                        message: { msgBody: "Tao tai khoan thanh cong ", msgBody: true },
                    });
            });
        }
    });
});
module.exports = userRouter;
