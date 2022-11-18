import User from "../models/User.js"
import { StatusCodes } from 'http-status-codes'
import {BadRequestError, UnauthenticatedError} from '../errors/index.js'


const register = async (req, res) => {  
    const {name, 
           email, 
           password, 
           lastName, 
           program, 
           phoneNumber, 
           status, 
           isWorking, 
           aboutMe, 
           jobTitle,
           company,
           employmentType,
           yearsOfExperience,
           jobDescription }  = req.body

    if(!name || !email || !password || !lastName || !program || !phoneNumber || !status){
        throw new BadRequestError('please provide all values')
    }

    const userAlreadyExists = await User.findOne({email})

    if(userAlreadyExists){
        throw new BadRequestError('Email already in use')
    }

    const user = await User.create({name, 
                                    email, 
                                    password, 
                                    lastName, 
                                    phoneNumber, 
                                    program, 
                                    status, 
                                    isWorking, 
                                    aboutMe, 
                                    jobTitle,
                                    company,
                                    employmentType,
                                    yearsOfExperience,
                                    jobDescription})
    const token = user.createJWT()
    res
        .status(StatusCodes.CREATED)
        .json({
            user: {
                email: user.email,
                name: user.name,
                lastName: user.lastName,
                status: user.status,
                program: user.program,
                linkedInProfile: user.linkedInProfile,
                phoneNumber: user.phoneNumber,
                isWorking: user.isWorking,
                aboutMe: user.aboutMe,
                jobTitle: user.jobTitle,
                company: user.company,
                employmentType: user.employmentType,
                yearsOfExperience: user.yearsOfExperience,
                jobDescription: user.jobDescription,
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
    const {name, 
           email, 
           lastName, 
           program, 
           linkedInProfile, 
           phoneNumber, 
           status, 
           isWorking, 
           aboutMe,
           jobTitle,
           company,
           employmentType,
           yearsOfExperience,
           jobDescription } = req.body

    if(!email || !name || !lastName || !program || !linkedInProfile || !phoneNumber || !status){
        throw new BadRequestError('Please provide all values')
    }

    const user = await User.findOne({_id: req.user.userId})

    user.name = name
    user.email = email
    user.lastName = lastName
    user.status = status
    user.program = program
    user.linkedInProfile = linkedInProfile
    user.phoneNumber = phoneNumber
    user.isWorking = isWorking
    user.aboutMe = aboutMe
    user.jobTitle = jobTitle
    user.company = company
    user.employmentType = employmentType
    user.yearsOfExperience = yearsOfExperience
    user.jobDescription = jobDescription

    await user.save()

    const token = user.createJWT()

    res.status(StatusCodes.OK).json({user, token})
}

const getAllUsers = async (req, res) => {
    
    const users = await User.find({})

    res.status(StatusCodes.OK).json(users)

}
 
export { register, login, updateUser, getAllUsers }