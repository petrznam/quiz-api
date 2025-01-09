class UserController{
    constructor(user_service){
        this.user_service = user_service;
    }

    register(req, res){
        const { nickname, password } = req.body;
        if(!nickname || !password) res.json({message : "Никнейм и пароль обязательны!"}, 400);
        res.json({message : "Регистрация прошла"}, 201);
    }
}

module.exports = UserController;