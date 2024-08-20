import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'

const userRouter = express.Router()
userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    users.getUsers(req, res)
})

userRouter.get('/:id', (req, res) => {
    users.getUser(req, res)
})

userRouter.post('/register', (req, res) => {
    users.addUser(req, res)
})

userRouter.patch('/update/:id', (req, res) => {
    users.editUser(req, res)
})

userRouter.delete('/delete/:id', (req, res) => {
    users.deleteUser(req, res)
})

userRouter.post('/login', (req, res) => {
    users.loginUser(req, res)
})

export{
    userRouter,
    express
}