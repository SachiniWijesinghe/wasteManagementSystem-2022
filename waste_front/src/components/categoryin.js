import React, { useState ,useEffect} from "react"

import axios from "axios";

export default function Category(){

    const[Categoryname,setname]=useState("");
  
    const[Categorylist,setCategorylist]=useState([]);
    const[seletcID,setSelectedID] = useState("");
    const [isUpdated, setIsUpdated] = useState(false);
    const [filter,selFilter]=useState('')
    ;
    

    useEffect(()=>{
        callingCategoryinfoAPI();

    },[]);


  



const[error,setError]=useState(false);

 
//delete categories
async function removeCatogeryInfo (id) {
    try {
      console.log("url "+`http://localhost:9090/Category/delete/${id}`);
      await axios.delete(`http://localhost:9090/Category/delete/${id}`).then((response)=>{
         alert("succesfully delete "+JSON.stringify(response));
         callingCategoryinfoAPI();
      }).catch((err)=>{
         console.log("error "+err);
      });
    } catch (error) {
      console.log("error happen when delete cat info "+error);
    }
  }
  



//adding data
    function sendData(e){
        e.preventDefault();
       const newCat ={Categoryname}

       if(Categoryname.length==0){
        setError(true);
       }
       
       console.log(newCat);
      
       axios.post("http://localhost:9090/Category/add",newCat).then(()=> {alert("Category add");callingCategoryinfoAPI();}).catch((err)=>{alert(err)})

     }

     function callingCategoryinfoAPI (){
        try {
            axios.get('http://localhost:9090/Category/').then((res)=>{
                console.log("response"+JSON.stringify(res));
                if(res.status =='200'){
                    setCategorylist(res.data);

                }else{alert("somthing went wrong please  try again")}
            }).catch((err)=>{
            console.log("axio callig error on callingCategoryinfoAPi"+err) 
            });
        } catch (error) {
            console.log("erro in function callingCategoryinfoAPi"+error);
            
        }

     }

     

     function updateSelectValues (catName) {
        setIsUpdated(!isUpdated);
        alert("parms "+catName);
        setname(catName);
       // setCatogy(catName);

      //  document.getElementById('cat').value = catName;

        //setTimeout(()=>{
      //    setIsUpdated(!isUpdated);
        //},3000);
        //selectCategory(catName);

  }


     function CallingUpdateapi(){
        try {
          var data = JSON.stringify({
           
            "Categoryname": Categoryname
          });
          
          var config = {
            method: 'put',
            url: `http://localhost:9090/Category/update/${seletcID}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            alert("Successfully updated info");
            callingCategoryinfoAPI();
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
        } catch (error) {
         console.log("error happem calling updaye api "+error); 
        }
      }
      






     




    return(
        <div className="container">
 <div className="main-wrapper">
        <div className="card shadow mb-1">

            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Category intert</h6>
            </div>

            <form onSubmit={sendData}>

                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label">Category Name</label>
                        <input type="text" className="form-control" id="Name" placeholder="Enter Category Descriptiom"
                             value={Categoryname}
                            onChange={(e) => {
                                setname(e.target.value);
                            } }  />
                           {error&&Categoryname.length<=0? <label id="error">Category name Cant be Empty</label>:""}

                    </div>








                    <button type="button" onClick={(e)=>{
                        if(isUpdated){
                          // update
                          setIsUpdated(!isUpdated);
                          CallingUpdateapi();

                        }else{
                          //save
                          sendData(e);
                        }
                    }} name="save_cate" id="save_cate" className={(!isUpdated) ? "btn btn-primary" : "btn btn-warning"}> {(!isUpdated) ? "Save" : "Update"} </button>
                </div>
            </form>
            </div>







            <div class="container-fluid">
            <div className="card shadow mb-4">
 
            <div class="card-header py-3"> <h6 class="m-0 font-weight-bold text-primary">View All Categories</h6>

            <form class="form-inline my-1 my-lg-0">
      <div className="serchbar">
      <input class="form-control mr-sm-1" type="search" placeholder="Search by name"value={filter} onChange={(e)=> selFilter(e.target.value)} />
      </div>
    </form>

            </div>
            
            <table className="table">
            <thead className="thead-dark">
           
                <tr>  
                      
                    <th scope="col">Category name</th>
                    <th scope="col">Update Category</th>
                    <th scope="col">Delete Category</th>
                </tr>
                
            </thead>
            <tbody>
              {Categorylist.filter(sub=>{
                return sub.Categoryname.toLowerCase().includes(filter.toLowerCase())

              }
                ).map((rowCategory)=>{

return(  <tr >
             
    <td>{rowCategory.Categoryname}</td>
    <td> <button type="button" name="save_cate" id="save_cate" className="btn btn-warning" onClick={()=>{ setSelectedID(rowCategory._id); updateSelectValues(rowCategory.Categoryname)}}> update </button></td>
    <td> <button type="button" name="save_cate" id="save_cate" className="btn btn-danger"  onClick={()=>{ removeCatogeryInfo(rowCategory._id);}}> delete </button></td>
</tr>)
              

              })}  
 
            </tbody>
            
        </table></div> </div> 
     
     
     
     
        </div>
        </div>
     
     
     
     
     
     
     )


}
