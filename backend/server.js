require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users')
const jobPostsRoutes = require('./routes/jobPosts')
const institutionsRoutes = require('./routes/institutions')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/users',usersRoutes)
app.use('/api/job-posts',jobPostsRoutes)
app.use('/api/institutions',institutionsRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log(`connected to db & listening on port ${process.env.PORT}`)
})
    })
    .catch((error) => {
        console.log(error)
    })




