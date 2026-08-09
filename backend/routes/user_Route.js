
import express from 'express'
import { loginUser , registerUser , adminLogin } from '../controllers/user_Controller.js'
import adminAuth from '../middlewares/adminAuth.js'

const userRouter = express.Router()

userRouter.post('/register' , registerUser)
userRouter.post('/login' , loginUser)
userRouter.post('/admin' , adminLogin)


export default userRouter;