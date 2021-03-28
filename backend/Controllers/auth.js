const Teacher = require('../Models/teacher')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const { now } = require('mongoose')
require('dotenv').config()

exports.signupT = async (req, res) => {
    const teacherExists = await Teacher.findOne({email: req.body.email})
    if(teacherExists)
        return res.status(403).json({error: "Email taken"});
    
    const teacher = await new Teacher(req.body)
    await teacher.save();
    res.status(200).json("Signup Successful please login");
}

exports.signinT = (req, res) => {
    console.log(req);
    const {email, password} = req.body
    Teacher.findOne({email}, (err,teacher)=>{
        if(err || !teacher)
            return res.status(401).json({error: "Teacher with that email does not exist"})
    
        if(!teacher.authenticate(password))
            return res.status(401).json({error: "Email and password do not match"});


        const token = jwt.sign({_id: teacher._id},process.env.JWT_SECRET);
        res.cookie("t",token,{expire: new Date()+9999})
        const {_id,name,email} = teacher
        return res.json({token,teacher: {_id,name,email}}); 
   })
}


exports.signoutT = (req,res) => {
    res.clearCookie("t");
    return res.json({message: "Signed Out!"});
} 

//STUDENT

const Student = require('../Models/student')
exports.signupS = async (req, res) => {
    const studentExists = await Student.findOne({email: req.body.email})
    if(studentExists)
        return res.status(403).json({error: "Email taken"});
    
    const student = await new Student(req.body)
    await student.save();
    res.status(200).json("Signup Successful please login");
}

exports.signinS = (req, res) => {
    const {email, password} = req.body
    Student.findOne({email}, (err,student)=>{
        if(err || !student)
            return res.status(401).json({error: "Student with that email does not exist"})
    
        if(!student.authenticate(password))
            return res.status(401).json({error: "Email and password do not match"});


        const token = jwt.sign({_id: student._id},process.env.JWT_SECRET);
        res.cookie("t",token,{expire: new Date()+9999})
        const {_id,name,email} = student
        return res.json({token,student: {_id,name,email}}); 
   })
}


exports.signoutS = (req,res) => {
    res.clearCookie("t");
    return res.json({message: "Signed Out!"});
} 
