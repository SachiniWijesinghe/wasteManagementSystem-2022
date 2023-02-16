import React, { useState,useEffect } from "react"
import axios from "axios";

export default function Requestform(){


     const[name,setname]=useState("");
     const[Contactnumber,setcNumber]=useState("");
     const[address,setAddress]=useState("");
     const[Categoryname,setCatogy]=useState("");
     const[SubCategoryname,setSubCatogory]=useState("");
     const[approximatewaight,setApproximatewaight]=useState("");
     const[description,setDescription]=useState("");
     const [categories, setCategories] = useState([]);
     const [subCategories, setSubCategories] = useState([]);


     const[error,setError]=useState(false);





     useEffect(() => {
        async function getCategories() {
          const fetchedCategories = await axios.get('http://localhost:9090/Category');
          setCategories(fetchedCategories.data);
        }
        getCategories();
      }, []);


     function sendData(e){
        e.preventDefault();
       const newRqform ={name,Contactnumber,address,Categoryname,SubCategoryname,approximatewaight,description}
       //error
if(name.length==0||address.length==0||SubCategoryname.length==0||approximatewaight.length==0||description.length==0||Contactnumber.length==0){
  setError(true);
 }

       
       console.log(newRqform);
      
       axios.post("http://localhost:9090/Requestform/add",newRqform).then(()=> {alert("formm Send")}).catch((err)=>{alert(err)})

     }async function selectCategory(cat) {
        setCatogy(cat);





        const fetchedSubCategories = await axios.get('http://localhost:9090/SubCategory');
        console.log(fetchedSubCategories.data);
        const subCat = [];
        fetchedSubCategories.data.forEach((element) => {
          console.log(Categoryname);
          console.log(element.Categoryname);
          if (element.Categoryname === cat) {
            subCat.push(element);
          }
        });
        console.log(subCat);
        setSubCategories(subCat);
      }
      function selectSubCategory(sub) {
        console.log(sub);
        setSubCatogory(sub);
      }





 
 return(
  
   <div className="container">
       <div className="card shadow mb-1">
        
          <div className="card-header py-3">
               <h6 className="m-0 font-weight-bold text-primary">Request Form</h6>
            </div>
           
            <form  onSubmit={sendData}>

                <div className="card-body">
                <div className="mb-3">
                            <label htmlFor="Nameinput" className="form-label">Name</label>
                            <input type="text" className="form-control" id="Name"  placeholder="Enter your name" 
                            onChange={(e) =>{
                                setname(e.target.value);
                            }
                            } />
                             {error&&name.length<=0? <label id="error">name Can not be Empty</label>:""}
                                       
                    </div> 


                <div className="mb-3">
                         <label htmlFor="inputCnumber" className="form-label">Contact Number</label>
                            <input type="Number" className="form-control" id="CNumber"  placeholder="07********"
                             onChange={(e) =>{
                                setcNumber(e.target.value);
                            }}
                            />
                             {error&&Contactnumber.length<=0? <label id="error">Contact Number Can not be Empty</label>:""}
                </div>

                <div className="mb-3">
                                 <label htmlFor="Inputadress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="Address"      onChange={(e) =>{
                                setAddress(e.target.value);
                            }} />
                            {error&&address.length<=0? <label id="error">address Can not be Empty</label>:""}
                </div>
  
  
                <div className='mb-3'>
              <select
                onChange={(e) => {
                  selectCategory(e.target.value);
                }}
                className='form-select'
              >
                <option defaultValue={'Select Item'}>Select Category</option>
                {categories.length > 0 &&
                  categories.map((category) => {
                    return (
                      <option key={category._id} value={category.Categoryname}>
                        {category.Categoryname}
                      </option>
                    );
                  })}


              </select>
            </div>


            <div className='mb-3'>
              <select
                onClick={(e) => {
                  selectSubCategory(e.target.value);
                }}
                className='form-select'
              >
                {subCategories.length > 0 &&
                  subCategories.map((subCategory) => {
                    return (
                      <option key={subCategory._id} value={subCategory.SubCategoryname} required>
                        {subCategory.SubCategoryname}
                      </option>
                    );
                  })}
              </select>
            </div>

                <div className="mb-3">
                         <label htmlFor="input weight" className="form-label">Approximate Weight</label>
                        <input type="Weight" className="form-control" id="Weight"  onChange={(e) =>{
                                setApproximatewaight(e.target.value);
                            }} />{error&&approximatewaight.length<=0? <label id="error">Approximate Weight can not be emtpy</label>:""}
    
                </div>

             <div className="mb-3">
                <label htmlFor="Description" className="form-label">Description</label>
                 <textarea  onChange={(e) =>{
                                setDescription(e.target.value);
                            }} className="form-control" id="Description" rows="3"     ></textarea>
                            
            </div>{error&&description.length<=0? <label id="error">Description Weight can not be emtpy</label>:""}
<br></br>

                    <button type="submit"  name="save_cate" id="save_cate" className="btn btn-primary" > Send request </button>
                </div>  
            </form>
            </div>

        </div>
    
    

    
   


)



}

