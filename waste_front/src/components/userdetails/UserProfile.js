import React, {useState,useEffect} from "react";
import axios, { Axios } from "axios";
import { useParams} from 'react-router-dom';


function UserProfile() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    //const [cusDetails, setCusDetails]= useState(); 
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
        password: "",
    });


    // function sendData(e){
        
    //     e.preventDefault();
        
    //     const newUser ={
    //         name,
    //         email,
    //         address,
    //         phoneNumber
           
    //     }

    const params = useParams();

        useEffect(() => {

            //get id from url
            const id = params.id;
            console.log("param id :>",id);
           
        console.log("abc " + user?.result?._id)
        
        
                axios.get(`http://localhost:9090/user/get/${id}`)
                .then((res) => {
                  console.log(res);
                  let data = res.data;
                  //setCusDetails(data);

                    setUser({
                        name: res.data.user.name,
                        email: res.data.user.email,
                        address: res.data.user.address,
                        phoneNumber: res.data.user.phoneNumber,
                        password: res.data.user.password,
                    });
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
            
            <u><h2 className="h-tag"><i class="fa-solid fa-circle-plus"></i> Your Profile</h2></u>
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
                    // placeholder="Hansi silva" 
                   
                          name="name"
                         
                          value={user.name}
                    />   
                
                </div>

                <div className="form-group">
                    <label for="Email">Email :</label>&nbsp;<br></br>
                    <input type="text"
                     className="inputcell" 
                     id="email" 
                     name="email"
                     value={user.email}
                    />  
                   
                </div>
                
                <div className="form-group">
                    <label for="Address">Address :</label>&nbsp;<br></br>
                    <input type="text"
                     className="inputcell" 
                     id="address"  
                   
                     name="address"
                     value={user.address}

                    /> 
                </div>

                <div className="form-group">
                    <label for="PhoneNumber">Contact Number :</label>&nbsp;<br></br>
                    <input
                     type="text" 
                     className="inputcell"
                      id="phoneNumber" 
                      name="phoneNumber"
                      value={user.phoneNumber}

                    /> 
                </div>

                {/* <Link to="/UserProfile"> */}
                 <button type="submit" className="btn-Search">Edit</button>
                 {/* </Link> */}
            </form>
            <br/>
          
            </div>


            
            
      
      
        <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google+</button>
       

      
        </div>
        
    )
                }
export default UserProfile;