import mongoose from "mongoose";

const libraryschema=mongoose.Schema({
    title:String,
    author:String, 
    isbnnumber: String,  
    publicationdate: String,
    authorname:String,
    birthdate:String,
    biography:String
})

const library=mongoose.model("library",libraryschema)

export default library;