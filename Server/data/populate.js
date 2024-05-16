import dotenv from 'dotenv'
dotenv.config()
import connectDB from '../db/connect.js'
import data from './products.json' with{type:"json"}
import Product from '../models/Product.js'


const populateDataToServer = async ()=> {
    try {
       await connectDB()
       await Product.deleteMany()
       await Product.create(data)
       console.log("product populated successfully")
       process.exit(0)
    } catch (error) {
         console.log(error)
       process.exit(0)
    }
}
populateDataToServer()