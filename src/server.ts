import "reflect-metadata";
import express from "express";
import "./database"; // já identifica quando é index.js
import { router } from "./routes";

// @types/express
const app = express();

app.use(express.json());
app.use(router);

app.use(function(err, req, res, next) {
    res.status(400).send(err.message);
});

app.listen(3000, () => console.log('Server is running...'));