const express = require("express");
const app = express();
const PORT = 5000;

require("./db")();

app.use(express.json());

app.use("/api", require("./routes/trips"));
app.use("/api", require("./routes/booking"));

app.get("/demo", (req, res) => {
  res.send("App is Working");
});

app.listen(PORT, () => {
  console.log("Server listening on PORT", PORT);
});
