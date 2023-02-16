import React, { useState ,useEffect} from "react"

import axios from "axios";

export default function SubCategory(){

    const[SubCategoryname,setname]=useState("");
    const[seletcID,setSelectedID] = useState("");
    const[Categoryname,setCatogy]=useState("");
    const[subCategorylist,setsubCategorylist]=useState([]);

    const [categories, setCategories] = useState([]);
    const[error,setError]=useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const [filter,selFilter]=useState('')
    useEffect(()=>{
        callingCategoryinfoAPI();

    },[]);


    useEffect(() => {
       
        getCategories();
      }, []);

      async function getCategories() {
        const fetchedCategories = await axios.get('http://localhost:9090/Category');
        setCategories(fetchedCategories.data);
      }

      async function selectCategory(cat) {
        setCatogy(cat);
       
        
      }
    
    function updateSelectValues (catName,subCatName) {
          setIsUpdated(!isUpdated);
          alert("parms "+catName+" "+subCatName);
          setname(subCatName);
          setCatogy(catName);

          document.getElementById('cat').value = catName;

          //setTimeout(()=>{
        //    setIsUpdated(!isUpdated);
          //},3000);
          //selectCategory(catName);

    }
function CallingUpdateapi(){
  try {
    var data = JSON.stringify({
      "SubCategoryname": SubCategoryname,
      "Categoryname": Categoryname
    });
    
    var config = {
      method: 'put',
      url: `http://localhost:9090/SubCategory/update/${seletcID}`,
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

async function removeCatogeryInfo (id) {
  try {
    console.log("url "+`http://localhost:9090/SubCategory/delete/${id}`);
    await axios.delete(`http://localhost:9090/SubCategory/delete/${id}`).then((response)=>{
       alert("succesfully delete "+JSON.stringify(response));
       callingCategoryinfoAPI();
    }).catch((err)=>{
       console.log("error "+err);
    });
  } catch (error) {
    console.log("error happen when delete cat info "+error);
  }
}






    function sendData(e){
         
        e.preventDefault();
       const newCat ={SubCategoryname,Categoryname}


       if(Categoryname.length==0){
        setError(true);
       }
       
       console.log(newCat);
      
       axios.post("http://localhost:9090/SubCategory/add",newCat).then(()=> {alert("subCategory add");  callingCategoryinfoAPI();}).catch((err)=>{alert(err)})

     }

     function callingCategoryinfoAPI (){
        try {
            axios.get('http://localhost:9090/SubCategory').then((res)=>{
                console.log("response"+JSON.stringify(res));
                if(res.status =='200'){

                    setsubCategorylist(res.data);

                }else{alert("somthing went wrong please  try again")}
            }).catch((err)=>{
            console.log("axio callig error on callingCategoryinfoAPi"+err) 
            });
        } catch (error) {
            console.log("erro in function callingCategoryinfoAPi"+error);
            
        }

     }
 



      
   










    return(
      <div className="container">
    <div className="main-wrapper">
      
        <div className="card shadow mb-1">

            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary"> Sub Category intert</h6>
            </div>

            <form onSubmit={sendData}>

                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label"> Sub Category Name</label>
                        <input type="text" className="form-control" id="Name" placeholder="Enter Category Descriptiom"
                            value={SubCategoryname}
                            onChange={(e) => {
                                setname(e.target.value);
                            } } />{error&&SubCategoryname.length<=0? <label id="error">name Can not be Empty</label>:""}

                    </div>

                    <div className='mb-3'>
              <select id="cat"
                onChange={(e) => {
                    selectCategory(e.target.value)
                 
                }}
                className='form-select'
              >
                <option  defaultValue={'Select Item'}>Select Category</option>
                {categories.length > 0 &&
                  categories.map((category) => {
                    return (
                      <option key={category._id} defaultValue={categories[3]} value={category.Categoryname}>
                        {category.Categoryname}
                      </option>
                    );
                  })}
              </select>
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
      <input class="form-control mr-sm-1" type="search" placeholder="Search by name" value={filter} onChange={(e)=> selFilter(e.target.value)}  />

      </div>
    </form>

            </div>
            
            <table className="table">
            <thead className="thead-dark">
           
                <tr>  
                      
                    <th scope="col">subCategory name</th>
                    <th scope="col">Category name</th>
                    <th scope="col">Update Category</th>
                    <th scope="col">Delete Category</th>
                </tr>
                
            </thead>
            <tbody>
              
              {subCategorylist
              .filter(sub=>{
                return sub.SubCategoryname.toLowerCase().includes(filter.toLowerCase()) ||sub.Categoryname.toLowerCase().includes(filter.toLowerCase())

              }
                )
              .map((rowsubCategory)=>{
                console.log("set id "+rowsubCategory._id);

return(  <tr >
             
    <td>{rowsubCategory.SubCategoryname}</td>
    <td>{rowsubCategory.Categoryname}</td>
    <td> <button type="button" name="save_cate" id="save_cate" className="btn btn-warning" onClick={()=>{ setSelectedID(rowsubCategory._id); updateSelectValues(rowsubCategory.Categoryname,rowsubCategory.SubCategoryname)}}> update </button></td>
    <td> <button type="button" name="save_cate" id="save_cate" className="btn btn-danger" onClick={()=>{setSelectedID(rowsubCategory._id); removeCatogeryInfo(rowsubCategory._id);}}> delete </button></td>
</tr>)
              

              })}  
 
            </tbody>
            
        </table></div> </div> 
     
     
     
     
     
        </div>
     
     
        </div>
     
     
     
     )


}
