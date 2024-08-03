import library from "../Models/librarymodel.js";


// Post

export const createdetails=async(req,res)=>{
    try {
        const {
            title,
            author, 
            isbnnumber ,  
            publicationdate ,
            authorname,
            birthdate,
            biography}=req.body;        

        const newdetails=new library({
            title:title,
            author:author, 
            isbnnumber:isbnnumber,  
            publicationdate:publicationdate ,
            authorname:authorname,
            birthdate:birthdate,
            biography:biography
        })
        await newdetails.save();

        res.status(200).json({newdetails})
    } catch (error) {
        console.log(error);
    }
}

// Get

export const getdetails = async(req,res)=>{
    try {
        const getdetails=await library.find();

        res.status(200).json({getdetails})
    } catch (error) {
        console.log(error);
    }
}
// Get by Id

export const getdetailsid= async(req,res)=>{
    try {
        const id=req.params.id;

        const getdetailsid=await library.findOne({_id:id});

        res.status(200).json({getdetailsid})


    } catch (error) {
        console.log(error);
    }

}

// Put

export const putdetails= async(req,res)=>{
    try {
        const id=req.params.id;

        const {
            title,
            author, 
            isbnnumber ,  
            publicationdate ,
            authorname,
            birthdate,
            biography}=req.body;                

        const iddetails=await library.findOneAndUpdate({_id:id},{
            title:title,
            author:author, 
            isbnnumber:isbnnumber,  
            publicationdate:publicationdate ,
            authorname:authorname,
            birthdate:birthdate,
            biography:biography
        })

        res.status(200).json({iddetails})
        
    } catch (error) {
        console.log(error);

    }
}

// Delete

export const deletedetails= async(req,res)=>{
    try {
        const id=req.params.id;

        const deltedetails=await library.findOneAndDelete({_id:id})

        
        res.status(200).send("deleted successfully")

    } catch (error) {
        console.log(error);
    }

}
