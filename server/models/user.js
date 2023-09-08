const mongoos = require("mongoose");

const Schema = mongoos.Schema;

const userSchema = new Schema({
  ip: {
    type: String,
    required: true,
  },
  activity: [
    {
      type: Object,
      required: true,
      unique: false,
    },
  ],
});

userSchema.methods.addActivity = function (activity) {
  const updatedActivity = [...this.activity];
  updatedActivity.push(activity);
  this.activity = updatedActivity;
  return this.save();
};

module.exports = mongoos.model("User", userSchema);
