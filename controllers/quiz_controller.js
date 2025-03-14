class QuizController{
    constructor(quiz_service){
        this.quiz_service = quiz_service;
    }

    get_all(req, res){
        this.quiz_service.get_all()
            .then(quizes => {
                return res.status(200).json({quizes});
            })
    }

    create_quiz(req, res){
        const { title, description, category_id, author_id } = req.body;
        this.quiz_service.create(title, description, category_id, author_id)
            .then(() => res.status(201).json({message : "викторина создана!"}));
    }

    get_by_id(req, res){
        const quiz_id = req.params.id;
        this.quiz_service.get_quiz_by_id(quiz_id).then(quiz => {
            return res.status(200).json({quiz});
        })
    }

    create_question(req, res){
        const quizId = req.params.quizId;
        const { title, correct} = req.body;
        this.quiz_service.create_question(title, correct, quizId)
            .then(() => res.status(200).json({message: "Вопрос успешно создан"}));
    }
}

module.exports = QuizController;