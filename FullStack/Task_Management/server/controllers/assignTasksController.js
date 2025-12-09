const AssignTask =require('../models/AssignTask')
const Task =require('../models/taskModel')
const User =require('../models/userModel')

async function  assignTask(req,res) {

    try {
        const {taskId,userId}=req.body

        if(!taskId || !userId){
            return res.status(400).send({msg:"Missing taskId or userId"})
        }

        const newAssign = await AssignTask.create({
            taskId,userId,createdBy:req.user.id
        })

        return res.status(200).send({msg:"Task assigned successdully",success:true})
    } catch (error) {
        return res.status(500).send({msg:"Server error",success:false})
    }
    
}

async function getTasksByUser(req,res){
    try {
        const userId=Number(req.params,userId)
        console.log(userId)
        const assignments = await AssignTask.findAll({
            where:{userId:userId},
            include:[
                {model:Task , as:"taskDetails",attributes:["id","title","status","priority","startDate","endDate"]}
            ]
        })
        console.log(assignments)
        

        res.status(200).send({success:true,assignments})
    } catch (error) {
        return res.status(500).send({msg:"Server error",success:false})
        
    }
}

module.exports ={assignTask,getTasksByUser}