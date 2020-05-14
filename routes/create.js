var express = require('express');
var router = express.Router();
var studentsModel = require('../models/student')

router.post('/', function (req, res, next) {
    const { firstname, lastname, projectname, skills, result } = req.body;

    const newStudent = new studentsModel({
        firstname: firstname,
        lastname: lastname,
        projectname: projectname,
        skills: skills,
        result: result,
    });

    newStudent.save((err, user) => {
        if (err) {
            res.status(400).json("Error registering user");
        } else {
            res.json({ status: true, msg: "User added Successfully!" })
        }
    })
});

module.exports = router;
