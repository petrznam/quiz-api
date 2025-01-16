class UserRepoository{
    constructor(connection){
        this.connection = connection;
    }
    
    async create(nickname, password){
        const user = [nickname, password];
        const sql = "INSERT INTO users (nickname, password) VALUES (?, ?)";
        const result = await this.connection.query(sql, user);
        // await this.connection.end()
        return result;
    }

    async get_all(){
      const [users, fields] = await this.connection.query("SELECT * FROM users");
      // await this.connection.end()
      return users;
    }

    async check_same_nickname(nickname){
      const sql = "SELECT * FROM users WHERE nickname = ?";
      const [users, fields] = await this.connection.query(sql, [nickname]);
      // await this.connection.end()
      return users.length !== 0;
    }

}

module.exports = UserRepoository;