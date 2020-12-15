const Student = require('../model/student');

const createStudent = (req, res) => {
    const newStudent = new Student({
        id: req.body.id,
        studentName: req.body.studentName,
        dob:req.body.dob,
        discription:req.body.discription,
        subject:req.body.subject
    });
    
    Student.create(newStudent, (err, data) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    })
}


const getStudent = (req, res) =>{
    Student.find({})
        .then((student) => {
            if(!student){
                res.json({msg : "no data"});
            }
            else{
                res.json(student);
            }
        })
        .catch(
            (err) => {
                console.log(`error in getting student ${err}`);
            }
        )
}



module.exports.createStudent = createStudent;
module.exports.getStudent = getStudent;