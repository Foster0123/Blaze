import * as dotenv from 'dotenv'

import path from 'path';
import express from 'express'
import cors from 'cors'
import { client } from './config/redis.js';

import server from './utils/server.js';
import todo from './data/data.json';

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log(`Url: ${req.url} Method: ${req.method}`)
    next()
})
app.get("/", async (_, res) => {
    res.send({ data: "Data Exported To Client" });
})
app.post("/signin", (req: any, res: any) => {
    const user = {
        name: req.body.signin_user,
        pass: req.body.signin_password
    }
    console.log(user);
})
app.listen(process.env.PORT, server())