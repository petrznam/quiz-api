const jwt = require("jsonwebtoken");
const verify = jwt.verify;
const secret = "999abc";

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'не авторизирован' });
    }
    const secret  = process.env.SECRET_KEY || "999abc";
    try{
        const payload = verify(token, secret);
        req.user = payload;
        next();
    } catch (err){
        console.log(err);
        return res.status(403).json({ error: 'ошибка токена' });
    }
}

module.exports = auth;