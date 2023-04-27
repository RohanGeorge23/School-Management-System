const mongoose = require('mongoose')
const dbURI = process.env.DB_URI

const connectDb=async ()=>{
    try {
        const db = await mongoose.connect(dbURI)
        console.log('database connected!!')

    } catch (error) {
        console.log('rrtt',error)
    }
}
module.exports = connectDb