import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://alanroot:yE3XrkECw4Sf3oBX@cluster0.pfn0oi5.mongodb.net/todo-app')
    console.log("DB connected")
}