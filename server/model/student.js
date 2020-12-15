const mongoose = require('mongoose');


var studentSchema = new mongoose.Schema(
    {
        id: {
            type:String
        },
        studentName: {
            type: String
        },
        discription: {
            type:String
        },
        dob: {
            type: Date
        },
        subject: {
            type: [String]
        }
    }
)


module.exports = Student = mongoose.model('student', studentSchema);