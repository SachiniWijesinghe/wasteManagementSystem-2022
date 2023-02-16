import React, { useState } from "react" //functional component ekk me add krnne
import axios from "axios";


export default function AddShoroomitem() {


    const [file, setFile] = useState();
    const [itemname, setItemName] = useState("");
    const [quntity, setQuntity] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    
     const[error,setError]=useState(false);
    //globle variable.we can access within everywhere

   // console.log('form data '+JSON.stringify(formData));
 
    function sendData(e) {
        e.preventDefault();


        const formData = new FormData();
        formData.append("file", file);
        formData.append("itemname", itemname);
        formData.append("quntity", quntity);
        formData.append("price", price);
        formData.append("category", category);

        
        if(file.length==0 ||
            itemname.length==0 ||
            quntity.length==0 ||
            price.length==0||
            category.length==0
            ){
              setError(true);
            }

        axios.post("http://localhost:9090/showroomitem/add", formData).then((reponse) => {
            console.log("response "+JSON.stringify(reponse));
            alert(JSON.stringify(reponse.data));
            setFile("");
            setItemName("");
            setQuntity("");
            setPrice("");
            setCategory("");

        }).catch((err) => {
            alert(err)
        })

/*axios.post("http://localhost:9090/showroomitem/add", formData).then(() => {
            
            alert("Contactus Added")
           
            setFile("");
            setItemName("");
            setQuntity("");
            setPrice("");
            setCategory("");

        }).catch((err) => {
            alert(err)
        })
        */
    }

    //------------------------------------------------------------------------------------------

    



    return (
        <div className="container">
        <div className="card shadow mb-1">
       

        <div className="card-header py-3">
                <h4 className="m-0 font-weight-bold text-primary" style={{Color:"Blue"}}><b>Add Item</b></h4>
            </div>
            <form onSubmit={sendData} >  

            <div className="card-body">
                    <div className="mb-3">

      <div >
      
         <div className="form-group">

                    <label for="images">Select Your Image</label>
                    <input type="file" className="form-control" name="file" aria-describedby="emailHelp" placeholder="Enter price 000.00" onChange={(e) => {
                        setFile(e.target.files[0]);
                    }}></input>
                   {error&&file.length<=0? <label id ="error" style={{color:"red"}}>file cannot be empty</label>:""}<br></br>

                    <label for="itemname">Item Name :</label>
                    <input type="text" className="form-control" name="itemname" aria-describedby="emailHelp" placeholder="Enter item name" onChange={(e) => {
                        setItemName(e.target.value);
                    }}></input>
                   {error&&itemname.length<=0? <label id ="error" style={{color:"red"}}>itemname cannot be empty</label>:""}<br></br>

                    <label for="exampleInputEmail1">Quntity :</label>
                    <input type="number" className="form-control" name="quntity" aria-describedby="emailHelp" placeholder="Enter quntity" onChange={(e) => {
                        setQuntity(e.target.value);
                    }}></input>
                    {error&&quntity.length<=0? <label id ="error" style={{color:"red"}}>quntity cannot be empty :</label>:""}<br></br>


                    <label for="exampleInputEmail1">Price :</label>
                    <input type="number" className="form-control" name="price" aria-describedby="emailHelp" placeholder="Enter price 000.00" onChange={(e) => {
                        setPrice(e.target.value);
                    }}></input>
                    {error&&price.length<=0? <label id ="error" style={{color:"red"}}>price cannot be empty</label>:""}<br></br>

                    <label for="exampleInputEmail1">Choose Category :</label>
                    <select name="category"  placeholder="select category" onChange={(e) => {
                        setCategory(e.target.value);
                    }}>
                        <option value="chair">Chairs</option>
                        <option value="bed">Bed</option>
                        <option value="table">Table</option>
                        <option value="metress">Metress</option>
                        <option value="sofa">Sofa</option>
                        <option value="cupboard">Cupboard</option>

                    </select>
                    <br></br>{error&&category.length<=0? <label id ="error" style={{color:"red"}}>name cannot be empty</label>:""}<br></br>
                    <br/>
                    



                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

               </div></div></div>
            </form>
           
            </div></div>
    )

}

