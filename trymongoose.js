const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/empldb',{
   useNewUrlParser:true,
   useCreateIndex:true
})

const Employee = mongoose.model('Employee',{
    eno:{
 
        type:Number
    },
    ename:{
 
        type:String
    }
 })

 const eObj = new Employee({
    eno:1001,
    ename:'First Employee'
 })

 eObj.save().then(()=>{
    //can write eObj in then((eObj)) but not needed here.
    console.log(eObj);
 }).catch((err)=>{
    console.log("Error saving data",err)
 })