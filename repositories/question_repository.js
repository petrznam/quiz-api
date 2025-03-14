class QuestionRepository{
    constructor(connection){
        this.connection = connection;
    }

    async create(title, correct, quizId){
        // Создание вопроса
        const question = [title, correct, quizId];
        const sql = "INSERT INTO questions (title, correct, quiz_id) VALUES (?, ?, ?)";
        const result = await this.connection.query(sql, question);
        return result;
    }

    async get_by_quiz_id(quizId){
        // Получение вопросов по викторине
        const sql = "SELECT * FROM questions WHERE quiz_id = ?";
        const [result, fields] = await this.connection.query(sql, [quizId]);
        return result;
    }


}

module.exports = QuestionRepository;