const User = require('./userModel')
const Task =require('./taskModel')
const AssignTask = require('./AssignTask')

AssignTask.belongsTo(User, {foreignKey:'userId',as:'userDetails'})
AssignTask.belongsTo(Task, {foreignKey:'taskId', as:'taskDetails'})

User.hasMany(AssignTask,{foreignKey:'userId',as:'assignedTasks'})
User.belongsToMany(Task,{through:AssignTask,foreignKey:"userId",as:"assignTasks"})

Task.hasMany(AssignTask,{foreignKey:'taskId',as:'assigntasks'});
Task.belongsToMany(User,{through:AssignTask,foreignKey:"taskId",as:"assignTasks"})



module.exports={User,Task,AssignTask}