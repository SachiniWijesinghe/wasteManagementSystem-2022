const router = require("express").Router();
const User = require("../models/User");
let user = require("../models/User");



//adding users            
//http://localhost:9090/user/add
router.route("/add").post((req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const phoneNumber = Number(req.body.phoneNumber);
    const password = req.body.password;


    const newuser = new User({
        name,
        email,
        address,
        phoneNumber,
        password
    })


    //save user and return json
    

    newuser.save().then(() => {
        res.json(newuser._id)
        console.log(newuser._id)
    }).catch((err) => {
        console.log(err);
    })
})


//viewall
router.route("/").get((req, res) => {

   User.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err);
    })


})

//update

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;

    const {  name, email, address, phoneNumber, password } = req.body;


    const updateUser = {
        name,
        email,
        address,
        phoneNumber,
        password
    }
    const update = await User.findByIdAndUpdate(userId, updateUser).then(() => {
        res.status(200).send({ status: "User updated", user: update })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "Error with updating Data ",
            error: err.massage
        })

    })


})

//http://localhost:9090/User/delete/631218392a59d3d1790a6059
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;
    await User.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "User deleted" });

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete user", error: err.massage });
    })



})

router.route("/get/:id").get(async (req,res) =>{
    let userId = req.params.id;
   const user = await User.findById(userId)
    .then((user) => {
        res.status(200).send({ status: "User fetched",user });

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get user", error: err.massage });
    })



})



// router.get('/signup',(req,res)=>{
//     res.send("hello");
// });

// router.post('/signup',(req,res)=>{
//     var {name,email,password}=req.body
//     console.log(req.body)
//     if(!email || !password || !name)
//     {
//         return res.status(422).json({error:"Add all data"})
//     }
//     User.findOne({email:email})
//    .then((savedUser)=>{
//        if(savedUser){
//             return res.status(422).json({error:"User already exists with that email"})
//        }
//        const user=new User({
//         email,
//         password,
//         name,
//     })
//     user.save()
//     .then((user)=>{
//         res.json({message:"Saved Successfully"})
//         console.log(user.email)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })
// })


module.exports = router;
