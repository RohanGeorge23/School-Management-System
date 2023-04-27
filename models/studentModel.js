const mongoose =require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({

  first_name: {type:String, required:true}, 
  middle_name: {type:String}, 
  last_name:{type:String},
  age: {type:Number, required:true, min:4, max:25},
  dob: {type:Date},
  class:{type:Number},
  stu_image:{type:String},
  stu_aadhar_num:{type:Number}, 
  father_name: {type:String},
  mother_name:{type:String},
  stu_address:{type:String},
  mobile_num:{type:Number},
  whatsapp_num:{type:Number},
  email: {type:String, required:true},
  parent_gaurdian_detail:[{ 
    parent_gaurdian_name:{type:String},
    relationship_with_student:{type:String},
    occupation:{type:String},
    employers_name:{type:String},
    monthly_income:{type:Number},
    email_address:{type:String},
  }],
  religion:{type:String},
  caste:{type:String},
  sub_caste:{type:String},
  minority:{type:Boolean},
  mother_tongue:{type:String},
  medium_of_last_School:{type:String},
  bus_facility:{type:Boolean},
  bank_details:[{
    bank_name:{type:String},
    bank_location:{type:String},
    account_number:{type:Number},
    ifsc_code:{type:String},    
  }],

})

// Compiling Student Schema
const studentModel =  mongoose.model('student',studentSchema)

// Creating Sample Student
// const createStu=async()=>{
//   try {
//     const studentDoc = new studentModel({
//       first_name:"rohit",
//       last_name:"george",
//       age:21,
//       dob:"1994-11-23",
//       class:4,
//       whatsapp_num:90082393184,
//       email:'rohit7@gmail.com',
//       parent_gaurdian_detail:[{
//         parent_gaurdian_name:'Rajan George',
//         relationship_with_student:'father',
//         occupation:'Pvt Job',
//         employers_name:'K&Q',
//         monthly_income:77000,
//         email_address:'rg@23.com'
//       }],
//       religion:'Christianity',
//       caste:'General',
//       minority:false,
//       mother_tongue:'malayalam'

//     })

//     console.log(studentDoc)
    
//     const savedDoc = await studentDoc.save()
    
//   } catch (error) {
//     console.log('err',error)
//   }
// }

module.exports = studentModel

