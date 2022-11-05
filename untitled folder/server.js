import express from 'express'   
const app = express ()

import dotenv from 'dotenv'
dotenv.config()

import 'express-async-errors'

import morgan from 'morgan'

// db and authenticateUser
import connectDB from './db/connect.js'


// routers
import authRouter from './routes/authRoutes.js'


// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
  }


app.use(express.json())

app.get('/', (req, res) => {
    res.json({msg:'WELCOME'})
})

app.get('/api/v1', (req, res) => {
    res.json({msg: 'API'})
})

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 4000


// start function

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()