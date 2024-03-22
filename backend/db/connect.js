const mongoose= require('mongoose')

const URI=process.env.MONGODB_URI;

const dbConnect=async()=>{
              try {
                    await mongoose.connect(URI)        
                    console.log("Database Connection Sucessfull")
              } catch (error) {
                    console.log("Database Connection Fail")
                            
              }
}
module.exports=dbConnect