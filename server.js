const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json("Welcome: This is a test app and it is running well")
})
app.listen(5000, console.log("Server running on port 5000"))
