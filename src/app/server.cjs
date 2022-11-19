require("dotenv").config();
const express = require("express");
const app = express();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server Running On ${process.env.APP_URL}:${process.env.APP_PORT}`);
})
