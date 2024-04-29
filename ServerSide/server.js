const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();
const PORT = 5000;

require("./db")();

app.use(cors()); // Enable CORS

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", require("./routes/trips"));
app.use("/api", require("./routes/booking"));
app.use("/api", require("./routes/stripe"));

app.get("/demo", (req, res) => {
  res.send("App is Working");
});

app.listen(PORT, () => {
  console.log("Server listening on PORT", PORT);
});
