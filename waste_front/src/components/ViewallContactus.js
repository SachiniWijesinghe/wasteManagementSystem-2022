import React, { useState, useEffect } from "react" //functional component ekk me add krnne
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
//generate pdf-----------------------------

       let docToPrint = React.createRef();

       const printDocument = () => {
         const input = docToPrint.current;
         html2canvas(input).then(canvas => {
           const imgData = canvas.toDataURL("image/png");
           const pdf = new jsPDF({
             orientation: "landscape",
             unit: "px",
             format: [600, 900]
           });
           pdf.addImage(imgData, "JPEG", 0, 0);
           pdf.save("Contact_us.pdf");
         });
       };
     
       //end generate pdf-----------------------------





export default function ViewallContactus() {

    //generate pdf-----------------------------

    let docToPrint = React.createRef();

    const printDocument = () => {
      const input = docToPrint.current;
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [600, 900]
        });
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("feedback list.pdf");
      });
    };
  
    //end generate pdf-----------------------------
   








    const [contactList, setContatList] = useState([]);

    useEffect(() => {
        callingConatactInfoAPI();
    }, []);



    //delete contact us
    
    async function removeContactInfo(id) {
        try {
            console.log("url " + `http://localhost:9090/contactus/delete/${id}`);
            await axios.delete(`http://localhost:9090/contactus/delete/${id}`).then((response) => {
                alert("succesfully delete " + JSON.stringify(response));
                callingConatactInfoAPI();
            }).catch((err) => {
                console.log("error " + err);
            });
        } catch (error) {
            console.log("error happen when delete cat info " + error);
        }
    }



   
    const [searchText, setSearchText] = useState('');
     
     
         const handlesearchArea = value => {
             setSearchText(value);
             filterData(value);   
         }
     
         const filterData = value => {
             const lowerCaseValue = value.toLowerCase().trim();
             if(!lowerCaseValue){
                callingConatactInfoAPI();
             }
             else{      
                 const filteredData = contactList.filter(item => {
                     return Object.keys(item).some(key => {
                         return item[key].toString().toLowerCase().includes(lowerCaseValue);
                     })
                 });
                 setContatList(filteredData);
             }
         }




    function callingConatactInfoAPI() {
        try {
            axios
            .get("http://localhost:9090/contactus/")
            .then((response) => {
                console.log("response " + JSON.stringify(response));
                if (response.status == '200') {
                    setContatList(response.data);
                } else {
                    alert("somthing went wrong, please try again");
                }
            }).catch((err) => {
                console.log("axio calling error on callingContactusInfoApi " + err);
            });
        } catch (error) {
            console.log("error in funtion callingContactusInfoApi " + error);
        }
    }
    

 







    





    return (
        <div className="container">

            <div className="row">
                <div className="col-lg-3 mt2 mb-2">
                    <h4>All Contact us Details</h4>
                </div >

                <div className="col-lg-3 mt2 mb-2">
                    
                    <input className="form-control" type="search"  name="searchTerm" onChange={ e => handlesearchArea(e.target.value)} placeholder="Search here......"></input>
                        <button type="submit">
                             <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search" viewBox="0 0 16 16">
                                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                             </svg>
                         </button>
                </div>

            </div>
            

            <div className="searchPanel">
                     <div className="searchPanel_addNew">
                     <div className="searchPanel_addNew d-flex">
                         <button className="newFeedback_btn" onClick={printDocument}>
                             Generate PDF
                         </button>
                        
                     </div>
                     </div>

             
</div>


        <div className="tableContent">
            <div ref={docToPrint}>
       
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        contactList.map((rowContact) => {
                            return (
                                <tr>
                                    <td>{rowContact.cname}</td>
                                    <td>{rowContact.email}</td>
                                    <td>{rowContact.contact}</td>
                                    <td>{rowContact.message}</td>

                                    
                                    
                                    <td><button className="btn btn-danger"  onClick={()=>{ removeContactInfo(rowContact._id);}}>
                                        <i class="fa fa-trash" aria-hidden="true">
                                            </i></button></td>

                                            
                                    
                                </tr>
                            )
                        })
                    }



                </tbody>
            </table>
            </div></div>

        </div>
    )



}
