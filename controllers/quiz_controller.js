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
}

module.exports = QuizController;