const express = require("express");
const { verifyToken } = require("../middlewares/auth");
const { getAllEmployees, addEmployee, deleteEmployee } = require("./employeeController");
const router = express.Router();
 
router.get("/employees",verifyToken,getAllEmployees);
router.post("/add",verifyToken,addEmployee);
router.delete("/employee/:id",verifyToken,deleteEmployee);

module.exports = router 