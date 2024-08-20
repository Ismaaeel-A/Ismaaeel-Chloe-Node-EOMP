import { connection as db } from "../config/index.js";
import { createToken } from '../middleware/AuthenticateUser.js'
import { compare, hash } from 'bcrypt'

class Users{
    getUsers(req, res){
        try {
            const strQry = `SELECT firstName, lastName, userAge, gender, userRole, emailAdd, userProfile FROM Users;`

            db.query(strQry, (err, results) => {
                `Unable to fetch all users`
                if (err) throw new Error(err);
                res.json({
                    status: res.statusCode,
                    results
                })
            })

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    getUser(req, res){
        try {
            const strQry = `SELECT firstName, lastName, userAge, gender, userRole, emailAdd, userProfile FROM Users WHERE userID = ${req.params.id};`

            db.query(strQry, (err, result) => {
                if (err) throw new Error(`Unable to fetch user`);
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })           

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    async addUser(req, res){
        try {
            let data = req.body
            if (data.userPass) {
                data.userPass = await hash(data.userPass, 12)

                // PAYLOAD
                let user = {
                    emailAdd: data.emailAdd,
                    pwd: data.pwd
                }

                let strQry = `INSERT INTO Users SET ?;`

                db.query(strQry, [data], (err) => {
                    if (err) {
                        res.json({
                            status: res.statusCode,
                            msg: 'This email is already in use.'
                        })
                    } else {
                        const token = createToken(user)
                        res.json({
                            token,
                            msg: 'You are now registered.'
                        })
                    }
                })
            }

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    async editUser(req, res){
        try {
            let data = req.body
            if (data.userPass) {
                data.userPass = await hash(data.userPass, 12)
            }
            const strQry = `UPDATE Users SET ? WHERE UserID = ${req.params.id}`

            db.query(strQry, [data], (err) => {
                if (err) throw new Error('Unable to update user information')
                res.json({
                    status: res.statusCode,
                    msg: 'Successfully updated user information.'
                })
            })

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    deleteUser(req, res){
        try {
            const strQry = `DELETE FROM Users WHERE userID = ${req.params.id}`

            db.query(strQry, (err) => {
                if (err) throw new Error('Failed to delete user.')
                res.json({
                    status: res.statusCode,
                    msg: 'The user has been deleted.'
                })
            })

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    
    async loginUser(req, res){
        try {
            const { emailAdd, userPass } = req.body
            const strQry = `SELECT firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile FROM Users WHERE emailAdd = '${emailAdd}';`

            db.query(strQry, async (err, result) => {
                if (err) throw new Error('Failed to log in.')
                if (!result ?.length) {
                    res.json({
                        status: 401,
                        msg: 'You provided an invalid email. Create an account to use this email'
                    })
                } else {
                    const isValidPass = await compare(userPass, result[0].userPass)
                    if (isValidPass) {
                        const token = createToken({
                            emailAdd,
                            userPass
                        })

                        res.json({
                            status: res.statusCode,
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json({
                            status: 401,
                            msg: 'Invalid password. Please input the correct password.'
                        })
                    }
                }
            })

        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
}

export {
    Users
}