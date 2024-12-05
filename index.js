const express = require('express');
const app = express();
const PORT = 3000;

// Middleware для парсинга JSON
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
    res.header("Access-Control-Allow-Origin", "*");
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