const express = require("express");
const app = express();
const port = 3001;



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.post("/register", (req, res) => {
    res.send("Standard POST response");
});

app.get("/register", (req, res) => {
    res.send("Standard GET response");
});
