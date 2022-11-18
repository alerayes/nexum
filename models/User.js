import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'Please provide name'],
        minlength: 2,
        maxlength: 100,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate:{
            validator: validator.isEmail,
            message: 'Please provide a valide email'
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
        select: false
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 20,
        trim: true,
        default: 'last name',
    },
    status: {
        type: String,
        enum: ['student', 'alumni'],
        default: 'student'
    },
    program: {
        type: String,
        minlength: 2,
        maxlength: 100,
        trim: true,
        default: 'program',
    },
    linkedInProfile: {
        type: String,
        trim: true,
        default: 'my linkedin profile'
    },
    phoneNumber: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'my number'
    },
    isWorking: {
        type: String,
        enum: ['I am open to work', 'I am working in my field'],
        default: 'no'
    },
    aboutMe: {
        type: String,
        maxlength: 1000,
        trim: true,
        default: 'about me'
    },
    jobTitle: {
        type: String,
        maxlength: 60,
        trim: true,
        default: 'job title'
    },
    company: {
        type: String,
        maxlength: 100,
        trim: true,
        default: 'company name'
    },
    employmentType: {
        type: String,
        enum: ['Part-Time Position', 'Full-Time Position'],
        default: 'Full-Time Position'
    },
    yearsOfExperience: {
        type: String,
        maxlength: 10,
        trim: true,
        default: '1 Year' 
    },
    jobDescription: {
        type: String,
        maxlength: 1000,
        trim: true,
        default: 'job description'
    }
})


UserSchema.pre('save', async function() {
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

UserSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}
export default mongoose.model('User', UserSchema)