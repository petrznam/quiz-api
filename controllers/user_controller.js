class UserController{
    constructor(user_service){
        this.user_service = user_service;
    }

    register(req, res){
        const { nickname, password } = req.body;
        if(!nickname || !password) res.json({message : "Никнейм и пароль обязательны!"}, 400);
        this.user_service.register(nickname, password)
            .then(() => {
                return res.status(201).json({message : "Регистрация прошла"});
            })
            .catch(err => {
                return res.status(403).json({message : err.message});
            })
    }

    get_all(req, res){
        this.user_service.get_all()
            .then(result => {
                return res.status(200).json(result)
            })
    }

    authorization(req, res){
        const { nickname, password } = req.body;
        if(!nickname || !password) res.json({message : "Никнейм и пароль обязательны!"}, 400);
        this.user_service.authorization(nickname, password)
            .then(() => res.status(200).json({message : "Авторизация успешно прошла"}))
            .catch((err) => res.status(403).json({message : err.message}))
    }
}

module.exports = UserController;