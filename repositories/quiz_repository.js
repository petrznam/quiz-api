class QuizRepository{
    constructor(connection){
        this.connection = connection;
    }

    async get_all(){
        const [quizes, fields] = await this.connection.query("SELECT * FROM quizes");
        // await this.connection.end()
        return quizes;
      }
      async create(title, description, category_id, author_id){
        const quizes = [title, description, category_id, author_id];
        const sql = "INSERT INTO quizes (title, description, category_id, author_id) VALUES (?, ?, ?, ?)";
        const result = await this.connection.query(sql, quizes);
        return result;
      }
      async get_by_id(quiz_id){
        const sql = "SELECT * FROM quizes WHERE id = ?";
        const [result, fields] = await this.connection.query(sql, [quiz_id]);
        return result[0];
      }
}

module.exports = QuizRepository;