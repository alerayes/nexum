// require('dotenv').config()

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

//  routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT} `))





// const usersRoutes = require('./routes/users')
// const jobPostsRoutes = require('./routes/jobPosts')
// const institutionsRoutes = require('./routes/institutions')

// // express app
// const app = express()



// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
// })




