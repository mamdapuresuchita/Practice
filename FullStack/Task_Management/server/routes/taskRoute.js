const express=require('express')

const router= express.Router()

const taskController = require('../controllers/taskController')

const { route } = require('./userRoute')
const {admin, auth } = require('../middleware/auth')

router.post('/createTask',auth,admin, taskController.createTask)
router.get('/getAllTasks',auth,admin,taskController.getAllTasks)
router.get('/getTaskbyID/:ID',auth,taskController.getTaskbyID)
router.put('/updateTask/:ID',auth,admin,taskController.updateTask)
router.delete('/deleteTask/:ID',auth,admin,taskController.deleteTask)
router.get('/queryTaskTitle/',taskController.queryTaskTitle)
router.get('/completedTasks',taskController.getCompletedTasks)
router.get('/highPriorityTasks',taskController.getHighPriorityTasks)
// router.get('./tasksBetweenDate',taskController)

//find completed tasks
//find highest priority tasks
// find tasks which are completed between given dates 


// router.get('taskOfUser',)

module.exports=router