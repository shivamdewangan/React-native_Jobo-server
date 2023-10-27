const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"]
    },
    description: {
        type: String
    },
    company: {
        type: String
    },
    salary: {
        type: String
    },
    location: {
        type: String
    },
    post: {
        type: String
    },
    experience: {
        type: String
    },
    link: {
        type: String
    },
    image:{
        type : String
    }
})

const Job=mongoose.model('job',jobSchema)
module.exports=Job