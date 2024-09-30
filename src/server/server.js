import express from "express";
import React from "react";
import ReactDOM from "react-dom/server"
import {App} from "../App"
import { indexTemplate } from "./index_template.js";

const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App())),
    )
})

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000")
})
