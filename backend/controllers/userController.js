const User = require('../models/UserModel')

// get all users


// get a single user


// create a new user
const createWorkout = async (req, res) => {
    const {name, email} = req.body

    // add doc to db
    try {
        const user = await User.create({name, email})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete an user


// update an user



module.exports = {
    createWorkout
}