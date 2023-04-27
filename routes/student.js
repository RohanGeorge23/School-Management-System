const express = require('express')
const router = express.Router()
const {allStudents,createStudent} = require('../controller/studentController')

router.get('/all',allStudents)
router.post('/create',createStudent)

// Example Request Query and Parameter
router.get('/rg/:id',(req,res)=>{
    console.log(req.query)
    res.send(req.params.id)
})

module.exports = router