

const jwt = require("jsonwebtoken");
module.exports = async(req, res, next)=>{
    try {

        const token = req.headers.authorization.split(' ')[1];
        // console.log(token);
        const decode = jwt.verify(token, process.env.ENV_SECRET_KEY);
        req.userDataObject = decode
        next()
    } catch(error) {

        return res.status(401).json({
            message:"Auth failed"
        }
         )
    }
}