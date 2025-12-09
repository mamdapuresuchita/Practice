const Task = require("../models/taskModel");

async function createTask(req,res) {
  console.log(req.body);
  try {
    const newTask = await Task.create(req.body);
    if (newTask) {
      res
        .status(200)
        .send({ msg: "task created successfully...", success: true });
    } else {
      res
        .status(400)
        .send({ msg: "Error while task creating", success: false });
    }
  } catch (error) {
    res.status(500).send({ msg: "server error", success: false });
  }
}

async function getAllTasks(req, res) {
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "title", "status", "priority", "startDate", "endDate"],
    });
    res.status(200).send({ taks: tasks, success: true });
  } catch (error) {
    res.status(500).send({ msg: "server error", success: false });
  }
}

async function getTaskbyID(req, res) {
  console.log(req.params.ID);
  const id = Number(req.params.ID);
  try {
    const task = await Task.findByPk(id);

    if (!task) {
      res.status(400).send({ msg: "Task not found", success: false });
    } else {
      res.status(200).send({ success: true, task: task });
    }
  } catch (error) {
    res.status(500).send({ msg: "server error", success: false });
  }
}

async function queryTaskTitle(req, res) {
  console.log(req.query);

  const { tName } = req.query;

  try {
    const taskByTitle = await Task.findOne({
      where: { title: tName },
    });

    if (!taskByTitle) {
      res.status(400).send({ msg: "Task not found", success: false });
    }
    res.status(200).send({ success: true, task: taskByTitle });
  } catch (error) {
    res.status(500).send({ msg: "Server Error", success: false });
  }
}

async function updateTask(req, res) {
  console.log(req.body);
  console.log(req.params);
  const ID = req.params.ID;
  const { priority, startDate, endDate } = req.body;

  try {
    const [updatedTask] = await Task.update(
      { priority, startDate, endDate },
      { where: { id: ID } }
    );

    if (!updatedTask) {
      res.status(400).send({ msg: "task not found" });
    }
    res.status(200).send({ success: true, msg: "task updated successfully" });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
}

async function deleteTask(req, res) {
  console.log(req.params);
  const { ID } = req.params;

  try {
    const taskDeleted = await Task.destroy({
      where: { id: ID },
    });
    console.log(taskDeleted, "taskDeleted");

    if (!taskDeleted) {
      res.status(400).send({ msg: "task not found", success: false });
    }
    res.status(200).send({ msg: "Task deleted successfully", success: true });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
}

async function getCompletedTasks(req,res) {
    try {
        const tasks = await Task.findAll({
            where:{status:"Done"}
        })
        res.status(200).send({success:true,tasks});
        
    } catch (error) {
        res.status(500).send({msg:"Server error",success:false})
    }
    
}

async function getHighPriorityTasks(req,res){
    try {
        const tasks = await Task.findAll({
            where:{priority:"high"}
        })

        res.status(200).send({success:true,tasks});

    } catch (error) {
        res.status(500).send({msg:"Server error",success:false})
    }
    
}



module.exports = {
  createTask,
  getAllTasks,
  getTaskbyID,
  updateTask,
  deleteTask,
  queryTaskTitle,
  getCompletedTasks,
  getHighPriorityTasks
};
