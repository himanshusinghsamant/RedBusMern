const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://himanshusamant3:V2b0hQBb9JTVtwxb@cluster0.jp7a8rl.mongodb.net/reserve";

function db() {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoose is live now");
    })
    .catch((err) => {
      console.log({ err });
    });
}

module.exports = db;
