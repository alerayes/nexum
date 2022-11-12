import express from 'express'
const router = express.Router()

import {register, login, updateUser, getAllUsers} from '../controllers/authController.js'
import { registerJob, getAllJob } from '../controllers/jobController.js'
//import { fetchAlumni } from '../controllers/alumni.js';
import authenticateUser from '../middleware/auth.js'

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/jobPost').post(registerJob)
router.route('/updateUser').patch(authenticateUser, updateUser)
router.route('/getUsers').get(getAllUsers)
router.route('/getJobs').get(getAllJob)
//router.route('/alumni').get(fetchAlumni)



export default router