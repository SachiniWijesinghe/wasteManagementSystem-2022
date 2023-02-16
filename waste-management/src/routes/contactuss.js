const router = require("express").Router();
let Contactus = require("../models/Contactus");

router.route("/add").post((req,res)=>{
   // res.json("contact us record Added"+JSON.stringify(req.body));
     console.log("data "+JSON.stringify(req.body));
    const cname= req.body.cname;                                              //end points
    const email=req.body.email;
    const contact = Number(req.body.contact);
    const message = req.body.message;

    const newContactus = new Contactus({
        cname,
        email,
        contact,
        message
        
    })
    newContactus.save().then(()=>{
        res.json("contact us record Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//view all
//http:localhost:9090/ wage data display krnna  //get methode eka use kle
router.route("/").get((req,res)=>{

      //uda hdpu const variable eka //me arrow function name eka api kmthi nmk
      Contactus.find().then((contactuss)=>{

        res.json(contactuss)

      }).catch((err)=>{
        console.log(err)
      })

})


//update                                  //passwena id eka
//http://localhost:9090/contactus/update/fdgtrtytrdfg wage  ena tika id eka widihta gnna : oni hode eka gnna //put ma oni na post ekenuth puluwn

router.route("/update/:cid").put(async(req,res)=>{


    let contactusID = req.params.cid;  //backend eke indn ena kenage userid eka fetch krl gththa
    const {cname,email,contact,message} = req.body; //front end eke indala updat krnna oni data tika enwa object ekk widiht
                                                    //eka enne req.body eke.e tika wen krl api aluthin hdna variable wlt dgnnwa .me widiht kynwa destructure kyl.meka nthuwa add eke athule widihtath data tyagnna puluwn

    const updateContactus = {
        cname,
        email,
        contact,
        message
    }
                         //model name             //id eka save krpu eka//update krnna hdpu object eka 54 di
    const update = await Contactus.findByIdAndUpdate(contactusID,updateContactus).then(()=>{

        res.status(200).send({status:"user updated"})
                                                    //*********front end ekt update krpu userwa ywnnna user dmme 
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.message});
    })  
})  


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
           //model name
    await Contactus.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error: err.message});
    })
})


//get only one contactus details
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Contactus.findById(userId).then((contactus)=>{
        res.status(200).send({status:"User fetched",contactus})//uda peliye contactus eka
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error: err.message});
    })
})


module.exports = router;