import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
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
    education: [{
        country: {
            type: String,
            trim: true,
            minlength: 3,
            default: 'my country',
        },
        province:{
            type: String,
            trim: true,
            minlength: 3,
            default: 'my province',
        },
        city: {
            type: String,
            trim: true,
            minlength: 3,
            default: 'my city',
        },
        institution: {
            type: String,
            trim: true,
            minlength: 3,
            default: 'my college',
        },
        course: {
            type: String,
            trim: true,
            minlength: 3,
            default: 'my course',
        },
        graduation: {
            type: Date,
        }
    }],
    professionalExperience: [{
        isWorking: {
            type: Boolean,
        },
        description: {
            type: String,
            trim: true,
            minlength: 20,
            default: 'my description',
        },
        position: {
            type: String,
            trim: true,
            minlength: 3,
            default: 'my position',
        },
        yearsOfExperience: {
            type: String,
            trim: true,
            default: 'n years'
        }

    }],
})


UserSchema.pre('save', async function() {
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