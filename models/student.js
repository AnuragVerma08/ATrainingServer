var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema(
    {
        firstname: String,
        lastname: String,
        projectname: String,
        skills: Array,
        result: String,
    },
    { "collection": "students" }
);

var studentModel = mongoose.model('StudentModel', studentSchema);
module.exports = studentModel;