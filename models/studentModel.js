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

const studentModel =  mongoose.model('student',studentSchema)


module.exports = studentModel

