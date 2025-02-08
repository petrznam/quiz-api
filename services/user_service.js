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

    async authorization(nickname, password){
        if(await this.user_repository.check_same_nickname(nickname)){
            const user = await this.user_repository.get_user_by_nickname(nickname);
            if(user.password !== password) return Promise.reject(new Error("Неверный пароль"));
            return true;
        }
        return Promise.reject(new Error("Пользователя с таким никнеймом не существует"));
    }

}

module.exports = UserService;