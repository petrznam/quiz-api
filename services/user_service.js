class UserService{
    constructor(user_repository){
        this.user_repository = user_repository;
    };
    
    async register(nickname, password){
        const same = await this.user_repository.check_same_nickname(nickname);
        if(same) return Promise.reject(new Error("Пользователь с таким никнеймом уже есть"));
        await this.user_repository.create(nickname, password);
        return true;
    };

    async get_all(){
        const users = await this.user_repository.get_all();
        return users.map(user => ({ id: user.id, nickname : user.nickname }));
    }

}

module.exports = UserService;