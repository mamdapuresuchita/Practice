const express =require('express')
const router = express.Router()

const assignTaskController = require('../controllers/assignTasksController')
const {auth,admin} = require('../middleware/auth')

router.post('assignTask',auth,admin,assignTaskController.assignTask)
router.get('getTasksByUser/:userId',auth,admin,assignTaskController.getTasksByUser)
// router.get('/getUserByAssignedTask/:taskId',auth,assignTaskController.getUserByTask)
// router.put('updateAssignedTask/:ID',auth,admin,assignTaskController.updateAssignedTask)
// router.delete('/deleteAssignedTask/:ID',auth,admin,assignTaskController.deleteAssignedTask)


module.exports =router