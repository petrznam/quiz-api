const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware для парсинга JSON
app.use(cors({
    origin : "*"
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "hello world!"});
});


app.get("/quizes", (req, res) => {
    const quizes = [
        {
            title : "викторина 1"
        },

        {
            title : "викторина 2"
        }
    ];
    console.log("Пришел запрос", req);
    res.json({quizes});
});

app.post("/quizes", (req, res) =>{
    const body = req.body;
    console.log(body);
    res.json({})
});

app.listen(PORT, () => {
    console.log("сервер запущен")
})