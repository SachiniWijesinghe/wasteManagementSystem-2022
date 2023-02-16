const router = require("express").Router();
const SubCategory = require("../models/Subcategory");
let form = require("../models/Subcategory");




//http://localhost:9090/SubCategory/add
router.route("/add").post((req, res) => {

    const SubCategoryname = req.body.SubCategoryname;
    const Categoryname = req.body.Categoryname;

    const newsubCategory = new SubCategory({
        SubCategoryname,Categoryname
    })
    newsubCategory.save().then(() => {
        res.json("Sub Category added")

    }).catch((err) => {
        console.log(err);
    })
})




//viewall
router.route("/").get((req, res) => {

    SubCategory.find().then((forms) => {
        res.json(forms)
    }).catch((err) => {
        console.log(err);
    })


})


//update
//http: //localhost:9090/SubCategory/update/6312306e6189ec795ddd0159
router.route("/update/:id").put(async(req, res) => {
    let Catid = req.params.id;

    const { SubCategoryname } = req.body;
    const { Categoryname } = req.body;


    const updateCategory = {
        SubCategoryname,Categoryname

    }
    const update = await SubCategory.findByIdAndUpdate(Catid, updateCategory).then(() => {
        res.status(200).send({ status: "Sub Caregory updated", user: update })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            status: "error with updating Data ",
            Error: err.massage
        })

    })


})

//http: //localhost:9090/Category/delete/6312306e6189ec795ddd0159
router.route("/delete/:id").delete(async(req, res) => {
    let subCatid = req.params.id;
    await SubCategory.findByIdAndDelete(subCatid).then(() => {
        res.status(200).send({ states: "Sub Category deleted" });

    }).catch((err) => {
        console.log(err.massage);
        res.status(500).send({ status: "Error with delete", error: err.massage });
    })



})











module.exports = router;