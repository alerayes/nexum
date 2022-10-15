const express = require('express')
const {
    createWorkout,
} = require('../controllers/userController')

const router = express.Router()

// Get all users
router.get('/', (req, res) => {
    res.json({mssg: 'GET all users'})
})

// Get one user



// Post a new user
router.post('/',  createWorkout)


// Delete a user



// Update a user



module.exports = router