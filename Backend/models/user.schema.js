const schema = require("mongoose").Schema;

const userSchema = schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = userSchema;
