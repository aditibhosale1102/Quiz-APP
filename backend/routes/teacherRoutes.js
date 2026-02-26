const express = require("express");
const router = express.Router();
const multer = require("multer");
const Teacher = require("../models/Teacher");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });


// Teacher Signup
router.post("/signup", upload.single("profilePic"), async (req, res) => {
  try {
    const newTeacher = new Teacher({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobile: req.body.mobile,
      address: req.body.address,
      profilePic: req.file ? req.file.filename : "",
    });

    await newTeacher.save();
    res.json({ message: "Teacher Registered Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get Pending Teachers
router.get("/pending", async (req, res) => {
  try {
    const teachers = await Teacher.find({ status: "pending" });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;