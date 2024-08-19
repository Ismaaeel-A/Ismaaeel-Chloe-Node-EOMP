import 'dotenv/config'
import jwt from 'jsonwebtoken'
const { sign, verify } = jwt

function createToken(user) {
    return sign(
        {
            emailAdd: user.emailAdd,
            pwd: user.pwd
        },

        process.env.SECRET_KEY, {
            expiresIn: '1h'
        }
    )
}

function verifyToken(req, res, next){
    const token = req?.headers["authorization"]
    if (token) {
        if (verify(token, process.env.SECRET_KEY)){
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: "An error has occurred"
            })
        }
    } else {
        res?.json({
            status: res.statusCode,
            msg: "Please log in to continue."
        })
    }
}

export {
    createToken,
    verifyToken
}