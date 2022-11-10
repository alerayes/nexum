import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JobSchema =  new mongoose.Schema({
    company: {
        type: String,
        //required: [true, 'Please provide company'],
        trim: true,
        minlength: 3,
        default:'hello',
     },
    location: {
        type: String,
        required: [true, 'Please provide location'],
        trim: true,
        minlength: 3,
        default:'noida'
    },
    position: {
        type: String,
        required: [true, 'Please provide position'],
        trim: true,
        minlength: 3,
        default:'super'
    },
    startdate: {
        type: Date,
        required: [true, 'Please provide start date'],
        default:'2022-02-10'
    },
    employmenttype: {
        type: String,
        required: [true, 'Please provide employment type'],
        trim: true,
        minlength: 3,
        default:'full time'
    },
    board: {
        type: String,
        required: [true, 'Please provide board'],
        trim: true,
        minlength: 3,
        default:'delhi board'
    },
    description: {
        type: String,
        required: [true, 'Please provide description'],
        trim: true,
        minlength: 3,
        default:'desc detail'
    },
    joblink: {
        type: String,
        required: [true, 'Please provide job link'],
        trim: true,
        minlength: 3,
        default:'googdocs'
    }
})

// JobSchema.pre('save', async function() {
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

JobSchema.methods.createJWT = function () {
    return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

export default mongoose.model('JobBoard', JobSchema)