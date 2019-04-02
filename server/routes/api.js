const express = require('express');
const router = express.Router();
var Task=require('../models/task');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
var db=require('../../dbconnections');

/* GET api listing. */
router.get('/alltasks', (req, res) => {
  Task.getAllTasks(function(err,rows){
    console.log(err, rows)
    if(err)
    {
        res.send(err);
    }else{
        res.send(rows);
    }
  });
});

/* Post api listing. */
//  router.post('/addemp', (req, res) => {
  
//   var data = Task.addEmployee(req.body)
//   console.log(data, 'data')
//    res.send(data)
// });

router.post('/addemp', (req, res) => {
  
  var postData  = req.body;
   db.query('INSERT INTO empdetails SET ?', postData, function (error, results, fields) {
    if(error)
    {
        res.send(error);
    }else{
      console.log(results, 'results', fields)
        res.send(results);
    }
	});
});

/* GET api listing. */
router.get('/task', (req, res) => {
  res.send('api works');
});


router.get('/test', (req, res) => {
  res.send('test works fine!!');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;