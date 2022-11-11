import User from "../models/User.js"
import { StatusCodes } from 'http-status-codes'
import {BadRequestError, UnauthenticatedError} from '../errors/index.js'


const register = async (req, res) => {  
    const {name, email, password} = req.body

    if(!name || !email || !password){
        throw new BadRequestError('please provide all values')
    }

    const userAlreadyExists = await User.findOne({email})

    if(userAlreadyExists){
        throw new BadRequestError('Email already in use')
    }

    const user = await User.create({name, email, password})
    const token = user.createJWT()
    res
        .status(StatusCodes.CREATED)
        .json({
            user: {
                email: user.email,
                name: user.name,
                lastName: user.lastName,
                institution: user.institution,
                program: user.program,
            },
            token
        })

}

const login = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide all values')
    }

    const user = await User.findOne({email}).select('+password')

    if(!user){
        throw new UnauthenticatedError('Invalid email')
    }
    
    console.log(user)

    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid password')
    }

    const token = user.createJWT()
    user.password = undefined

    res.status(StatusCodes.OK).json({user, token})
}

const updateUser = async (req, res) => {
    res.send('update user')
}

const getAllUsers = async (req, res) => {
    
    const users = await User.find({})

    res.status(StatusCodes.OK).json(users)
    console.log(res.status(200).json(users))
}
 
export { register, login, updateUser, getAllUsers }