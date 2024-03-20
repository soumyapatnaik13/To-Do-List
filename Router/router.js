const express= require("express");
const router = express.Router();
const controller= require("../Controller/controller")

router.post("/tasks",controller.createList)

router.get("/tasks",controller.readAllTheTasks)

router.post("tasks/:id",controller.completeAllTheTasks)

router.post("tasks/List/:id",controller.updateTasks)

router.delete("tasks:id",controller.deleteTasks);


module.exports=router
