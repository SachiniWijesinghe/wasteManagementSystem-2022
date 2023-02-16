const router = require("express").Router();



//model eke hdpu itemcollect eka meke use krnn wenwa
let collectItems = require("../models/itemCollect");






//create
//     http://localhost:9090/itemCollected/add
router.route("/add").post((req,res)=>{


    //model eke thina attributes wlt variable ekak hda gnnwa
      
        const date = req.body.date;  
        const contactNo = req.body.contactNo;
        const Categoryname = req.body.Categoryname;
        const SubCategoryname = req.body.SubCategoryname;
        const weight = Number(req.body.weight);
        const price = Number(req.body.price);
        const amount = Number(req.body.amount);
     
        //object ekak hadan data pass karanwa database ekta
        const newcollectItem = new collectItems({

            //uda gatta properties initialize kra gnnwa
           // customerID,
            date,
            contactNo,
            Categoryname,
            SubCategoryname,
            weight,
            price,
            amount

        })


      //object eka db ekt pass krnwa  
       newcollectItem.save().then(()=>{
         
        //success nm json format eken front ekt msg ekk ywnwa
        res.json("Item Added")

         }).catch((err)=>{

            //unsuccess nm terminal eke error eka pennwa
            console.log(err);
         })

})










//read
//  http://localhost:9090/itemCollected/
router.route("/").get((req,res)=>{



    //okkoma id gnna find methode eka cl krnwa model eken hdpu variable eken
    collectItems.find().then((items)=>{

        //succsee nm front ekt ywnwa data tika
        res.json(items)
    }).catch((err)=>{
         
        console.log(err)
    })


})




//update
// http://localhost:9090/itemCollected/update/gdhdg236465vbhd

//async eken req godk eddi ekak iwra wenkn anik ewa wait krn thiyn innwa.
router.route("/update/:customerId").put(async (req,res)=>{

    let userId = req.params.customerId;            //req eke parametr eke ena id eka gnnwa

    //req eken update wela ena data finch kra gnnwa
    const {date, contactNo, Categoryname, SubCategoryname,  weight, price, amount} = req.body;   //t structure
        
        
     //update krnn ona object eka create krnwa
     const updateStudent = {
        date,
        contactNo,
        Categoryname,
        SubCategoryname,
        weight,
        price,
        amount

     }  

      //findById-object id eken update krnw nm
       //findOne - nic/name eken hoyl update krnw nm


     const update = await collectItems.findByIdAndUpdate(userId, updateStudent).then(()=>{                          
                                               //1.update krnn ona userge id eka     //2.update krnn ona values thina object eka

    res.status(200).send({status: "User Updated", user: update})
                          //msg eka front ekt ywnwa    //update krpu userwa front ekt ywnwa

                        }).catch((err)=>{
                            console.log(err);
                            res.status(500).send({status: "Error with updating data"});
                        })

})






//delete
// http://localhost:9090/itemCollected/delete/fvwbg469gb
router.route("/delete/:id").delete(async (req,res)=>{

    let userId = req.params.id;

    await collectItems.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user" ,error: err.message });
    })
})







//search
// http://localhost:9090/itemCollected/get/3685q905
router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;                               //findone(email)  email eken search krnw nm       
   const user = await collectItems.findById(userId).then((collectItems)=>{
        res.status(200).send({status : "User Fetched" , collectItems })
    }).catch((err)=>{                                     //search krn value thina object eka
        console.log(err.message);
        res.status(500).send({status: "Error with get user" , error: err.message});
    })            
})


module.exports = router;