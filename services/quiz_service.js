class QuizService{
    constructor(quiz_repository, question_repository){
        this.quiz_repository = quiz_repository;
        this.question_repository = question_repository;
    }

    async get_all(){
        const quizes = await this.quiz_repository.get_all();
        return quizes;
    }
    async create(title, discription, category_id, author_id){
        await this.quiz_repository.create(title, discription, category_id, author_id);
        return true;
    }
    async get_quiz_by_id(quiz_id){
        const quiz = await this.quiz_repository.get_by_id(quiz_id);
        const questions = await this.question_repository.get_by_quiz_id(quiz_id);
        return {
            ...quiz,
            questions
        }
    }
    async create_question(title, correct, quizId){
        await this.question_repository.create(title, correct, quizId);
        return true;
    }
}

module.exports = QuizService;