const studentModel = require('../models/studentModel')

const allStudents= async (req,res)=>{
    // Return all Student Record
    const allStu = await studentModel.find()
    res.send(allStu)
    
}

const createStudent= async (req,res)=>{
    let data = req.body

    const insertStuData = new studentModel({

        first_name: data.first_name, 
        middle_name: data.middle_name, 
        last_name:data.last_name,
        age: data.age,
        dob:data.dob,
        class:data.class,
        stu_image:data.stu_image,
        stu_aadhar_num:data.stu_aadhar_num, 
        father_name:data.father_name ,
        mother_name:data.mother_name,
        stu_address:data.stu_address,
        mobile_num:data.mobile_num,
        whatsapp_num:data.whatsapp_num,
        email: data.email,
        parent_gaurdian_detail:[{ 
          parent_gaurdian_name:data.parent_gaurdian_detail[0].parent_gaurdian_name,
          relationship_with_student:data.parent_gaurdian_detail[0].relationship_with_student,
          occupation:data.parent_gaurdian_detail[0].occupation,
          employers_name:data.parent_gaurdian_detail[0].employers_name,
          monthly_income:data.parent_gaurdian_detail[0].monthly_income,
          email_address:data.parent_gaurdian_detail[0].email_address
        }],
        religion:data.religion,
        caste:data.caste,
        sub_caste:data.sub_caste,
        minority:data.minority,
        mother_tongue:data.mother_tongue,
        medium_of_last_School:data.medium_of_last_School,
        bus_facility:data.bus_facility,
        bank_details:[{
          bank_name:data.bank_details[0].bank_name,
          bank_location:data.bank_details[0].bank_location,
          account_number:data.bank_details[0].account_number,
          ifsc_code:data.bank_details[0].ifsc_code,    
        }]
    })
    const savedData = await insertStuData.save()
    res.send({'status':200, 'data':savedData})
}

module.exports = {allStudents,createStudent}