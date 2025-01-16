class QuizRepository{
    constructor(connection){
        this.connection = connection;
    }

    async get_all(){
        const [quizes, fields] = await this.connection.query("SELECT * FROM quizes");
        // await this.connection.end()
        return quizes;
      }
}

module.exports = QuizRepository;