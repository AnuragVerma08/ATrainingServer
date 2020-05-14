var express = require('express');
var router = express.Router();
var userStudentModel = require('../models/student')
/* GET users listing. */
router.get('/', function(req, res, next) {
  userStudentModel.find({}, (err, students) => {
    res.json(students);
  })
});

module.exports = router;
