const Admin = require('../model/admin');

const adminSignup = (req, res) => {
    const {userName, password, isAdmin} = req.body;

    Admin.findOne({userName})
        .then((admin) => {
            if(admin){
                return res.json({error: "user is already exsists"})
            }
            else {
                const newAdmin = new Admin({
                    userName,
                    password,
                    isAdmin
                })
                newAdmin.save()
                    .then((result) => {
                        res.json(result);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        })
}

const adminLogin = (req, res) => {
    const {userName, password} = req.body;
    
    Admin.findOne({$and:[{userName:userName}, {password: password},{isAdmin:true}]})
        .then((data) => {
            if(data){
                return res.json(true);
            }
            else{
                return res.json(false);
            }
        })
        .catch((err) => {console.log(err)});
}


module.exports.adminLogin = adminLogin;
module.exports.adminSignup = adminSignup;