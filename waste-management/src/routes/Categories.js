const router = require("express").Router();
const Category = require("../models/Category");
let form = require("../models/Category");



//http://localhost:9090/Category/add
router.route("/add").post((req, res) => {

    const Categoryname = req.body.Categoryname;


    const newCategory = new Category({
        Categoryname
    })
    newCategory.save().then(() => {
        res.json("Category added")

    }).catch((err) => {
        console.log(err);
    })
})




//viewall
router.route("/").get((req, res) => {

    Category.find().then((forms) => {
        res.json(forms)
    }).catch((err) => {
        console.log(err);
    })


})


//update
//http: //localhost:9090/Category/update/6312306e6189ec795ddd0159
router.route("/update/:id").put(async(req, res) => {
    let Catid = req.params.id;

    const { Categoryname } = req.body;


    const updateCategory = {
        Categoryname

    }
    const update = await Category.findByIdAndUpdate(Catid, updateCategory).then(() => {
        res.status(200).send({ status: "Caregory updated", user: update })
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
    let Catid = req.params.id;
    await Category.findByIdAndDelete(Catid).then(() => {
        res.status(200).send({ states: "Category deleted" });

    }).catch((err) => {
        console.log(err.massage);
        res.status(500).send({ status: "Error with delete", error: err.massage });
    })



})












module.exports = router;