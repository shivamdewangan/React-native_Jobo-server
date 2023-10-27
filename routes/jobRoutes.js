const express = require('express');
const jobController=require('../controller/jobsController')


const router = express.Router()

router
    .route('/')
    .get(jobController.getAllJobs)

module.exports=router
