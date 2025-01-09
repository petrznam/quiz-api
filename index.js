const express = require('express');
const cors = require("cors");
const mysql = require("mysql2");
const UserRepository = require("./repositories/user_repository");
const UserService = require("./services/user_service");
const UserController = require("./controllers/user_controller");

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
    host: "141.8.192.100",
    user: "a0221501_mega_quiz",
    database: "a0221501_mega_quiz",
    password: "fhlNPkKf"
}).promise();

// Middleware для парсинга JSON
app.use(cors({
    origin : "*"
}));

app.use(express.json());

// app.get("/", (req, res) => {
//     res.json({message: "hello world!"});
// });


// app.get("/quizes", (req, res) => {
//     const quizes = [
//         {
//             title : "викторина 1"
//         },

//         {
//             title : "викторина 2"
//         }
//     ];
//     console.log("Пришел запрос", req);
//     res.json({quizes});
// });

// app.post("/quizes", (req, res) =>{
//     const body = req.body;
//     console.log(body);
//     res.json({})
// });

const user_repo = new UserRepository(connection);
const user_service = new UserService(user_repo);
const user_controller = new UserController(user_service);

app.post("/register", user_controller.register);

app.listen(PORT, () => {
    console.log("сервер запущен")
})