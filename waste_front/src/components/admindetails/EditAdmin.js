import axios from 'axios'
import React, { useContext, useEffect, useState 
    // useNavigate
} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route, Redirect,
    // Navigate
  } from "react-router-dom";
import { NavLink, useParams,useNavigate} from 'react-router-dom'
import { updatedata } from './context/ContextProvider'



const EditAdmin = () => {

   const {setUPdata} = useContext(updatedata)

   const navigate = useNavigate("");

    const [inpval, setINP] = useState({
       name:"",
       email:"",
       address:"",
       phoneNumber:""
      
    });

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:9090/admin/get/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data.admin);//must be change
        

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data.admin)//must be change
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
        console.log("test inpval",inpval);
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {name,email,address,phoneNumber} = inpval;

        const res2 = await fetch(`http://localhost:9090/admin/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,email,address,phoneNumber
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        alert("Do you want to edit that data?");
        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate("/view")
            setUPdata(data2);
        }

    }



    
        return(
            <div className="container">
        
                <div className="hero">
                    <nav className="prmenu">
                        <ul className="">
                            <li><a href="/viewSchedule"><i class="fa-solid fa-house"></i> Home</a></li>                    
                            <li><a href="/add-schedule"><i class="fa-solid fa-circle-plus"></i> Add Schedule</a></li>
                            <li><a href="/view"><i class="fa-solid fa-list"></i> List of users</a></li>
                        </ul>
                    </nav>       
                </div>     
                
                <h2 className="h-tag"><i class="fa-solid fa-pen-to-square"></i> Update user details</h2>
                <div className="input-form">
                <form className="forms" noValidate>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="Name"
                        placeholder="Enter your name"
                        value={inpval.name}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email Address :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="email"
                        placeholder="Enter email address"
                        value={inpval.email}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="address"
                        placeholder="Enter address"
                        value={inpval.address}
                        onChange={setdata}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact Number :</label>&nbsp;<br></br>
                        <input type="text"
                        className="inputcell"
                        name="phoneNumber"
                        placeholder="Enter contact number"
                        value={inpval.phoneNumber}
                        onChange={setdata}/>
                    </div>

                  

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={updateuser} >
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>

                </form>
                </div>
            </div>
            
        )
    }

export default EditAdmin;

