const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser =require('../middleware/fetchuser')
const Profile = require('../models/Profile');

// Route 1: Get all the employees managed by the manager: GET "/api/profile/fetchEmployees". Login required.
router.get('/fetchEmployees',fetchuser,async(req,res)=>{
    try{
        const employees=await Profile.find({managed_by: req.user.id , role: "employee"});
        res.json(employees)
    }
    catch(error){
        res.status(500).send("Internal Server Error");
    }
})

// Route 2: Get all the co-managers for a manager manager
// router.get('/fetchmanagers',fetchuser,async(req,res)=>{
//     try{
//         const managers=await Profile.find({managed_by: req.user.id , role: "manager"});
//         res.json(employees)
//     }
//     catch(error){
//         res.status(500).send("Internal Server Error");
//     }
// })

// Route3: Add new employees using: POST "/api/profile/addEmployee". Login required.
router.post('/addEmployee',fetchuser,[
    body('employee_name','The name field cannot be blank').isLength({min:1}),
    body('age',"Please enter a valid age").isNumeric(),
    body('salary',"Please enter valid salary").isNumeric(),
] ,async(req,res)=>{

    //if validation check fails ==>Returning Bad request and the corresponding errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {employee_name,salary,position,age}=req.body

    const employee=new Profile({
        employee_name,position,age,salary,managed_by:req.user.id
    })

    const savedEmployee=await employee.save()
    res.json(savedEmployee)
})

// Route 4: Updating an employee details. Using PUT "/api/profile/updateEmployee".Login required.
router.put('/updateEmployee/:id',fetchuser,async(req,res)=>{
    const {position,age,salary}=req.body

    // Allowing to change position age and salary only
    const updatedEmployee={};
    if(position){updatedEmployee.position=position};
    if(age){updatedEmployee.age=age};
    if(salary){updatedEmployee.salary=salary};

    // Find the employee to be updated and update it 
    let employee = await Profile.findById(req.params.id); 
    if(!employee) {
        return res.status (404).send("Not Found"); 
    }

    if (employee.managed_by.toString() !== req.user.id) { 
        return res.status (401).send("Not Allowed"); 
    }

    employee= await Profile.findByIdAndUpdate(req.params.id, {$set: updatedEmployee},{new:true})
    res.json({employee});
})

// Exporting the overall router
module.exports = router