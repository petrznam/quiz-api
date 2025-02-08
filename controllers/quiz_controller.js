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

    create(req, res){
        const { title, description, category_id, author_id } = req.body;
        this.quiz_service.create(title, description, category_id, author_id)
            .then(()=>{

                return res.status(201).json({message : "викторина создана!"});
            })
    }
}

module.exports = QuizController;