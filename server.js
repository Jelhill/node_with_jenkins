const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      success: true,
      message: "App is running successfully and deploying with a changed line",
    });
});
app.listen(5000, console.log("Server running on port 5000"));
