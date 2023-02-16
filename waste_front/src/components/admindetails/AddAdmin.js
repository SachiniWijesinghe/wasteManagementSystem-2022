import React, {useState} from "react";
import axios from "axios";

function AddAdmin(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    


    function sendData(e){
        
        e.preventDefault();
        
        const newAdmin ={
          name,
          email,
          address,
          phoneNumber,
           
        }

        axios.post("http://localhost:9090/admin/add", newAdmin).then(()=>{
            alert("New user added.");
            
        }).catch((err)=>{
            alert(err);
        })

    }


    return(
        <div className="container">
            <div className="hero">
               <nav className="prmenu">
                    <ul className="">
                        <li><a href="/"><i class="fa-solid fa-house"></i> Home</a></li>                    
                        <li><a href="/addAdmin"><i class="fa-solid fa-circle-plus"></i> About</a></li>
                        <li><a href="/view"><i class="fa-solid fa-list"></i> List of users</a></li>
                    </ul>
               </nav>       
            </div>
            
            <u><h2 className="h-tag"><i class="fa-solid fa-circle-plus"></i> Add user to the system </h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={sendData}>

                <div className="form-group">
                    <label for="name">Full Name :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="name" placeholder="Enter your name" onChange={(e) =>{

                        setName(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="email">Email Address :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="email" placeholder="Enter email address" onChange={(e) =>{

                        setEmail(e.target.value);

                    }}></input>
                </div>
                
                <div className="form-group">
                    <label for="address">Address :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="address" placeholder="Enter your address" onChange={(e) =>{

                        setAddress(e.target.value);

                    }}></input>
                </div>

                <div className="form-group">
                    <label for="phoneNumber">Contact Number :</label>&nbsp;<br></br>
                    <input type="text" className="inputcell" id="phoneNumber" placeholder="Enter Contact number" onChange={(e) =>{

                        setPhoneNumber(e.target.value);

                    }}></input>
                </div>

               

                
                <button type="submit" className="btn-Search">Save</button>
            </form>

            </div>
            
        </div>
    )
}
export default AddAdmin;

