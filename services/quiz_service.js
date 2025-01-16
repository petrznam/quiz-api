class QuizService{
    constructor(quiz_repository){
        this.quiz_repository = quiz_repository;
    }

    async get_all(){
        const quizes = await this.quiz_repository.get_all();
        return quizes;
    }
}

module.exports = QuizService;