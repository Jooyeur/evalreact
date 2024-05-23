const {
  signupUser,
  verifyMail,
  loginUser,
} = require("../controllers/user-controller");

const router = require("express").Router();

router.post("/signup", signupUser);

router.post("/signin", loginUser);

router.get("/verifyMail/:token", verifyMail);

module.exports = router;
