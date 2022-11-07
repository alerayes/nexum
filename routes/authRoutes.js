import express from 'express'
const router = express.Router()

import {register, login, updateUser, getAllUsers} from '../controllers/authController.js'
//import { fetchAlumni } from '../controllers/alumni.js';

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(updateUser)
router.route('/getUsers').get(getAllUsers)
//router.route('/alumni').get(fetchAlumni)



export default router