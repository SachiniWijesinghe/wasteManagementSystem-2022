import React, {useState} from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';



function AddUser(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cusDetails, setCusDetails] = useState([]);


    const initialValues = {
        enableReinitialize: true,
        validateOnMount: true,
        user_id: cusDetails?.result?._id,
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
        password: "",
      };

      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
      const validationSchema = Yup.object({
        name: Yup.string().required("*Required!"),
        email: Yup.string().email("*Invalid email!").required("*Required!"),
        address: Yup.string().required("*Required!"),
        phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("*Required!").min(10, "Too short").max(10, "Too long"),
        password: Yup.string().required("*Required!"),
       
      });
    


    //   let navigate = useNavigate();

      const onSubmit = (values) => {


        //save data to database and get response
        axios.post("http://localhost:9090/user/add", values).then((res) => {
            alert("User Added Successfully");
            console.log(res.data);
            setCusDetails(res.data);
            console.log(cusDetails)
            window.location.href = `/profile/${res.data}`;
        }).catch((err) => {
            alert(err);
        })
      


      }

      const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });


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
            
            <u><h2 className="h-tag"><i class="fa-solid fa-circle-plus"></i> Register</h2></u>
            <div className="input-form">
            <form className="forms" onSubmit={formik.handleSubmit}>

                <div className="form-group">
                    <label for="Name">Full Name :</label>&nbsp;<br></br>
                    <input 
                    type="text" 
                    className="inputcell" 
                    id="name"
                    placeholder="Enter your name" 
                   
                          name="name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                    />   {formik.touched.name && formik.errors.name ? 
                    <div style={{ color: "red" }}>{formik.errors.name}</div> : null}

                    {/* {Object.keys(contractIDErr).map((key) =>{
                        return <div style={{color : "red"}}>{contractIDErr[key]}</div>
                    })} */}
                </div>

                <div className="form-group">
                    <label for="Email">Email :</label>&nbsp;<br></br>
                    <input type="text"
                     className="inputcell" 
                     id="email" 
                     placeholder="Enter your email" 
                     name="email"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.email}
                    />   {formik.touched.email && formik.errors.email ? 
                 <div style={{ color: "red" }}>{formik.errors.email}</div> : null}

                   
                </div>
                
                <div className="form-group">
                    <label for="Address">Address :</label>&nbsp;<br></br>
                    <input type="text"
                     className="inputcell" 
                     id="address"  
                     placeholder="Enter your address" 
                     name="address"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.address}

                    /> {formik.touched.address && formik.errors.address ? 
                        <div style={{ color: "red" }}>{formik.errors.address}</div> : null}
                </div>

                <div className="form-group">
                    <label for="PhoneNumber">Contact Number :</label>&nbsp;<br></br>
                    <input
                     type="text" 
                     className="inputcell"
                      id="phoneNumber" 
                      placeholder="Enter your contact number" 
                      name="phoneNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}

                    /> {formik.touched.phoneNumber && formik.errors.phoneNumber ? 
                        <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div> : null}
                </div>

                <div className="form-group">
                    <label for="Password">Password :</label>&nbsp;<br></br>
                    <input 
                    type="password" 
                    className="inputcell" 
                    id="password" 
                    placeholder="Enter Password" 
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}

                    /> {formik.touched.password && formik.errors.password ? 
                        <div style={{ color: "red" }}>{formik.errors.password}</div> : null}
                </div>

                {/* <Link to={`/profile/${cusDetails?.result?._id}`}> */}
                 <button type="submit" className="btn-Search">Register</button>
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
export default AddUser;