const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json("Welcome: This app is running well on port 5000")
})
app.listen(5000, console.log("Server running on port 5000"))
