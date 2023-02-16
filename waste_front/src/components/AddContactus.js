import React,{useState} from "react" //functional component ekk me add krnne
import axios from "axios";
import { NavLink, renderMatches } from "react-router-dom";

export default function AddContactus(){   //function names capital denna nthnm wada nthiwey


     const [cname,setName]= useState("");
     const [email,setEmail]= useState("");
     const [contact,setContact]= useState("");
     const [message,setMessage]= useState("");

    const[error,setError]=useState(false);



    function sendData(e){
      e.preventDefault();
      

      // const newContactus={
      //   cname,
      //   email,
      //   contact,
      //   message}
                

       var paylod = {
        "cname" : cname,
        "email" : email,
        "contact" : contact,
        "message" : message
       }
       

        if(cname.length == 0 ||
          email.length == 0 ||
          contact.length == 0 ||
          message.length == 0){
            setError(true);
          }
        
      

       axios.post("http://localhost:9090/contactus/add",paylod).then(()=>{
         alert("Contactus Added")
         setName("");
         setEmail("");
         setContact("");
         setMessage("");

      }).catch((err)=>{
        alert(err)
      })


    }

    
     return(
     
  
        <div className="container">
        <div className="card shadow mb-1">
       

        <div className="card-header py-3">
                <h4 className="m-0 font-weight-bold text-primary" style={{Color:"Blue"}}><b>Contact Us</b></h4>
            </div>
      <form onSubmit={sendData} >

      <div className="card-body">
                    <div className="mb-3">

      <div >
      
         <div className="form-group">
         <label for="cname" >Name :</label>
         <input type="text" name="cname" className="form-control" id="cname" aria-describedby="emailHelp" placeholder="Enter name"  onChange={(e)=>{
             setName(e.target.value);
        }}></input>
        {error&&cname.length<=0? <label id ="error" style={{color:"red"}}>name cannot be empty</label>:""}


       <br></br>
  
         <label for="exampleInputEmail1">Email address :</label>
         <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"  placeholder="Enter email"onChange={(e)=>{
           setEmail(e.target.value);
        }}></input>
        {error&&email.length<=0? <label id ="error" style={{color:"red"}}>email cannot be empty</label>:""}
       <br></br>
         <label for="exampleInputEmail1">Contact number :</label>
         <input type="text" className="form-control" name="contact"  id="contact" aria-describedby="emailHelp"  pattern="[0-9]{10}"  placeholder="Enter contact number"onChange={(e)=>{
          setContact(e.target.value);
        }}></input>
        {error&&contact.length<=0?  <label id ="error" style={{color:"red"}}>contact cannot be empty </label>:""}
        <br></br>
    
   
 

       <label for="exampleInputEmail1">message :</label>
       <textarea id="message"  className="form-control" name="message" rows="4" cols="50" placeholder="Type your message"onChange={(e)=>{
         setMessage(e.target.value);
       }}>
        
     
       </textarea>
       {error&&message.length<=0? <label id ="error" style={{color:"red"}}>this feild cannot be empty </label>:""}
       <br></br>
      </div>
 
         <button type="submit" className="btn btn-primary">Submit</button>
         <br></br>
         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      
      
         </div></div></div>
</form>
</div> 
</div> 

  
     )

}


