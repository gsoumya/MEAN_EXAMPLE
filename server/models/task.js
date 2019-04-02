var db=require('../../dbconnections');

var Task={
getAllTasks:function(callback){
return db.query("Select * from empdetails",callback);
},

addEmployee: function(data, res) {
  console.log(data, '!!!dddaaattaa')
 console.log(data.emp_name, 'emp_name!!!!!!!!!!!!!')
  return db.query("INSERT INTO `empdetails` (`emp_name`, `emp_id`) VALUES [data.emp_name, data.emp_id]",  function(err,result) {
    if(err) {
       res.send('Error');
    }
   else {
       res.send('Success');
    }
  })
  }
};


// addEmployee: function(data, callback) {
//   console.log(data, '!!!dddaaattaa')
//  console.log(data.emp_name, 'emp_name!!!!!!!!!!!!!')
//   return db.query("INSERT INTO `empdetails` (`emp_name`, `emp_id`, `emp_status`, `designation`, `joining_date`, `salary`, `experince`) VALUES [data.emp_name, data.emp_id, data.emp_status, data.designation, data.joining_date, data.salary, data.experince]", callback)
//   }
// };




module.exports = Task