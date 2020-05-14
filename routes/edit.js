var express = require('express');
var router = express.Router();
var studentModel = require('../models/student');

router.put('/', (req, res, next) => {
    const { oldfirstname, oldlastname, oldprojectname, firstname, lastname, projectname, skills } = req.body;

    studentModel.updateOne({ firstname: oldfirstname, lastname: oldlastname, projectname: oldprojectname }, { $set: { firstname: firstname, lastname: lastname, projectname: projectname, skills: skills } }, { multi: true }, (err, std) => {
        if (err) {
            res.status(400).json("Error while modifying Data !", err);
        } else {
            res.json({ status: true, msg: "User Modified Successfully" });
        }
    })
});

module.exports = router;
