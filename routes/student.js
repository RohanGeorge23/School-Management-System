const express = require('express')
const router = express.Router()
const {allStudents,createStudent} = require('../controller/studentController')

// All Router Goes Here
// Just commenting to check ssh 
router.get('/all',allStudents)
router.post('/create',createStudent)

module.exports = router