const mongoose = require('mongoose')
const app=require('./app')

const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(
    console.log('connected succesfully'),
).catch((err) => {
    if(process.env.NODE_ENV==='production'){
        console.log("error in connecting the database")
    }else{
        console.log("error in connecting the database",err)
    }
  });


app.listen(process.env.PORT,()=>{
    console.log("server running on port : ",process.env.PORT)
})