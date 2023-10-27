const express=require('express')
const morgan=require('morgan')


const AppError =require('./utils/appError')
const globleErrorHandler=require('./controller/errorController')

const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const jobRouter=require('./routes/jobRoutes')


const app=express()

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}


app.use('/job',jobRouter)

app.all('*',function(req,res,next){
    next(new AppError(`Can't find the ${req.originalUrl} on this server`))
})

app.use(globleErrorHandler.handleErrors)


module.exports=app 