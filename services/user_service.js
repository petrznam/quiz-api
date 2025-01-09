class UserService{
    constructor(user_repository){
        this.user_repository = user_repository;
    };
    
    async register(nickname, password){
        const same = await this.user_repository.check_same_nickname(nickname);
        if(same) throw new Error("Пользователь с таким никнеймом уже есть");
        await this.user_repository.create(nickname, password);
        return true;
    };

}

module.exports = UserService;