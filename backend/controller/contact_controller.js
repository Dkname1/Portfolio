const Contact = require("../model/contact_model")
const Project=require('../model/project_model')

const getData= async(req, res)=>{
              try {
              const response=await Project.find();
              res.status(200).json(response)
              
              } catch (error) {
                  res.status(500).json({message:"somethinf=g Went wrong"})
              }
}

const createData=async(req, res)=>{
              try {
                 const {first_name, last_name, phone, email, message}=req.body
              //    console.log(first_name, last_name, phone, email, message);
                  await Contact.create({first_name, last_name, phone, email, message})
                  res.status(201).json({message:"Contact Successfully"})
              } catch (error) {
                    res.status(400).json({message:"Something went Wrong"})
              }
}



const project = async (req, res) => {
  try {
    const { project_name, project_description } = req.body;
    console.log(project_name, project_description)
   await Project.create({
      project_name,
      project_description,
    });
    res.status(201).json({ message: "Project successfully" });
  } catch (error) {
    res.status(400).json({ message: "Something Wrong" });
  }
};

module.exports={getData, createData, project }