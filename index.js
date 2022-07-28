require("dotenv").config();
const express = require('express')
const app = express()

const connectToDb = require("./database/db");
const port = process.env.PORT || 3000;
const path = require("path");

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

connectToDb();

app.get('/', (req, res) => {
    res.render("index");
});



app.listen(port, () => 
console.log(`Servidor rodando em http://localhost:${port}`));