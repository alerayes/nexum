import JobBoard from "../models/JobBoard.js"
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

const registerJob = async (req, res) => {  
    //, location, position, startdate, employmenttype, board, description ,joblink
    const {company , location, position, startdate, employmenttype, board, description ,joblink} = req.body
    console.log("INFOOO", req.body)
    // if(!company || !location ){
    //     throw new BadRequestError('Please provide all values')
    // }
    //, location, position, startdate, employmenttype, board, description ,joblink
    const job = await JobBoard.create(req.body) //req.body.jobBoardcompany , location, position, startdate, employmenttype, board, description ,joblink
    console.log("inf2", job)
    const token = job.createJWT()
    res
        .status(StatusCodes.CREATED)
        .json({
            jobBoard: {
                company : job.company,
                location : job.location, 
                position : job.position, 
                startdate : job.startdate, 
                employmenttype : job.employmenttype, 
                board : job.board, 
                description : job.description ,
                joblink : job.joblink
            },
            token
        })

}

const getAllJob = async (req, res) => {
    
    const job = await JobBoard.find({})

    res.status(200).json(job)
}

export { registerJob, getAllJob }