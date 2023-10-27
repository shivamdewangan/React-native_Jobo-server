const catchAsync = require('../utils/catchAsync')
const JOB = require('../model/jobModel')
const AppError = require('../utils/appError')


exports.getAllJobs = catchAsync(async (req, res,next) => {
    const allJobs = await JOB.find()
    res.status(200).json({
        message: "success",
        totalResults:allJobs.length,
        allJobs
    })
})