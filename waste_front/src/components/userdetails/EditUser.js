import React, {useState,useEffect} from "react";
import axios from "axios";

function EditUser(props){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");


    const onSubmit = (values) => {
        // console.log("Form Date", values);
        // //  values.date_of_the_event = event_date; //watch
        // axios
        //   .put(`http://localhost:9090/user/update/${props.match.params._id}`, values)
        //   .then((res) => {
        //     // console.log(res);
        //     // console.log("Data", values);
        //     // history.push({
        //     //   pathname: `/customer/my-event`,
        //     // });
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      };
    
    
    
     useEffect(() => {
        axios
          .get(`http://localhost:9090/user/get/${props.match.params._id}`)
          .then((res) => {
            console.log(res);
            // setEvent(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
    
  }, []);

      
    


    return(
        <div className="container">
        
        <div className="hero">
           <nav className="prmenu">
                <ul className="navbar">
                    <li><a href="/home"><i class="fa-solid fa-house"></i> Home</a></li>                    
                    <li><a href="/add"><i class="fa-solid fa-circle-plus"></i> About</a></li>
                    <li><a href="/list"><i class="fa-solid fa-list"></i> Contact Us</a></li>
                </ul>
           </nav>       
        </div>
        
        <u><h2 className="h-tag"><i class="fa-solid fa-circle-plus"></i> Update Profile</h2></u>
        <div className="input-form">
        <form className="forms" 
        // onSubmit={handleSubmit}
        >

            <div className="form-group">
                <label for="Name">Full Name :</label>&nbsp;<br></br>
                <input 
                type="text" 
                className="inputcell" 
                id="name"
                placeholder="Hansi Perera" 
              
               
                      name="name"
                     
                    //   value={name}
                />   
            
            </div>

            <div className="form-group">
                <label for="Email">Email :</label>&nbsp;<br></br>
                <input type="text"
                 className="inputcell" 
                 id="email" 
                 placeholder="hansi@gmail.com" 
                 name="email"
                 
                //  value={email}
                />  
               
            </div>
            
            <div className="form-group">
                <label for="Address">Address :</label>&nbsp;<br></br>
                <input type="text"
                 className="inputcell" 
                 id="address"  
                 placeholder="panadura" 
                 name="address"
                //  value={address}

                /> 
            </div>

            <div className="form-group">
                <label for="PhoneNumber">Contact Number :</label>&nbsp;<br></br>
                <input
                 type="text" 
                 className="inputcell"
                  id="phoneNumber" 
                  placeholder="0762466803" 
                  name="phoneNumber"
                //   value={phoneNumber}

                /> 
            </div>

            {/* <Link to="/UserProfile"> */}
             <button type="submit" className="btn-Search">Save</button>
             {/* </Link> */}
        </form>
        <br/>
      
        </div>

        
        
  
    
               
         
   
    </div>
    
    )
}
export default EditUser;

