const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

let products = [
    { id: 1, name: "Стіл дерев'яний", price: 2500, image: "table.jpg" },
    { id: 2, name: "Диван шкіряний", price: 12000, image: "sofa.jpg" }
];

let orders = [];

// Маршрут для отримання товарів
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // Serve your HTML file
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));  // Serve your HTML file
});

app.get("/catalog", (req, res) => {
    res.sendFile(path.join(__dirname, 'catalog.html'));  // Serve your HTML file
});

app.get("/contacts", (req, res) => {
    res.sendFile(path.join(__dirname, 'contacs.html'));  // Serve your HTML file
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
});
