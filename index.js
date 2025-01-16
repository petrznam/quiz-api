const express = require('express');
const cors = require("cors");
const mysql = require("mysql2");
const UserRepository = require("./repositories/user_repository");
const QuizRepository = require("./repositories/quiz_repository");
const UserService = require("./services/user_service");
const QuizService = require("./services/quiz_service");
const UserController = require("./controllers/user_controller");
const QuizController = require("./controllers/quiz_controller");

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

const user_repo = new UserRepository(connection);
const quiz_repo = new QuizRepository(connection);
const user_service = new UserService(user_repo);
const quiz_service = new QuizService(quiz_repo);
const user_controller = new UserController(user_service);
const quiz_controller = new QuizController(quiz_service);

app.post("/register", user_controller.register.bind(user_controller));
app.get("/users", user_controller.get_all.bind(user_controller));

app.get("/quizes", quiz_controller.get_all.bind(quiz_controller));

app.listen(PORT, () => {
    console.log("сервер запущен")
})