var express = require('express');
var router = express.Router();
var studentModel = require('../models/student');

router.post('/', (req, res, next) => {
    const { firstname, lastname, projectname } = req.body;

    studentModel.deleteOne({ firstname: firstname, lastname: lastname, projectname: projectname }, (err, std) => {
        if (err) {
            res.status(400).json("Error while deleting Data !", err);
        } else {
            res.json({ status: true, msg: "User Deleted Successfully" });
        }
    })
});

module.exports = router;
