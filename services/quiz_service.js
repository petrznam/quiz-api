class QuizService{
    constructor(quiz_repository){
        this.quiz_repository = quiz_repository;
    }

    async get_all(){
        const quizes = await this.quiz_repository.get_all();
        return quizes;
    }
    async create(title, discription, category_id, author_id){
        await this.quiz_repository.create(title, discription, category_id, author_id);
        return true;
    }
}

module.exports = QuizService;