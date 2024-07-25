const mongoose = require('mongoose')


const database = ()=>{
    const url = `mongodb://localhost:27017/Hotel`
    mongoose.connect(url,{
        // useNewUrlParser:true,
        // useUnifiedToplogy:true
    }).then(()=>{
        console.log("Database Connected Successfully.........")
    }).catch((error)=>{
        console.log("Database Connection Error.........")
        console.log(error)
    })
    
}

module.exports = database