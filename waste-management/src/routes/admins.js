const router = require("express").Router();
const Admin = require("../models/Admin");
let admin = require("../models/Admin");



//adding users            
//http://localhost:9090/admin/add
router.route("/add").post((req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const phoneNumber = Number(req.body.phoneNumber);
   

    const newadmin = new Admin({
        name,
        email,
        address,
        phoneNumber,
       
    })
    newadmin.save().then(() => {
        res.json("User added")

    }).catch((err) => {
        console.log(err);
    })
})


//viewall
router.route("/").get((req, res) => {

   Admin.find().then((admins) => {
        res.json(admins)
    }).catch((err) => {
        console.log(err);
    })


})

//update

router.route("/update/:id").put(async(req, res) => {
    let adminId = req.params.id;

    const {  name, email, address, phoneNumber} = req.body;


    const updateAdmin = {
        name,
        email,
        address,
        phoneNumber
        
    }
    const update = await Admin.findByIdAndUpdate(adminId, updateAdmin).then(() => {
        res.status(200).send({ status: "User updated", admin: update })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "Error with updating Data ",
            error: err.massage
        })

    })


})

//http://localhost:9090/admin/delete/631218392a59d3d1790a6059
router.route("/delete/:id").delete(async(req, res) => {
    let adminId = req.params.id;
    await Admin.findByIdAndDelete(adminId).then(() => {
        res.status(200).send({ status: "User deleted" });

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.massage });
    })



})

router.route("/get/:id").get(async (req,res) =>{
    let adminId = req.params.id;
   const admin = await Admin.findById(adminId)
    .then((admin) => {
        res.status(200).send({ status: "User fetched",admin});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user", error: err.massage });
    })



})


module.exports = router;