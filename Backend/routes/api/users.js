const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = require("../../models/user.schema");
const User = mongoose.model("users", userSchema);
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const users = new User({
    username,
    password: await bcrypt.hash(password, 8),
  });
  users
    .save()
    .then((t) => res.status(200).json(t))
    .catch((err) =>
      res.json({ message: "Une erreur est survenue", error: err })
    );
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ message: "Mauvais email/password 1" });
      }
    } else {
      res.status(400).json({ message: "Mauvais email/password 2" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Mauvais email/password 3" });
  }
});

module.exports = router;
