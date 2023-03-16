require("dotenv").config();
const express = require("express");
const cors = require('cors');

const { server } = require('./utils/server')

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.get("/", (_, res) => {
    res.send({ auth:true });
})
app.get("/account", (_, res) => {
    res.sendStatus()
})

app.listen(process.env.APP_PORT, server)