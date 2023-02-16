import axios from 'axios';
import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import {render} from 'react-dom'

export default class Report extends Component {

    constructor(props){
        super(props);

        this.state={
           admins:[]
        };

    }

    componentDidMount(){
        this.retrieveAdmins();
    }
    
    retrieveAdmins(){
        axios.get("http://localhost:9090/admin/").then(res =>{
            if(res.data){
                this.setState({
                    admins:res.data
                });

                console.log(this.state.admins);
            }
        });
    }


    filterData(admins, searchKey){
        const result = admins.filter((admins) =>
        admins.name.includes(searchKey) ||
        admins.email.toLowerCase().includes(searchKey) 
        
        )

        this.setState({admins:result})
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:9090/admin/").then(res =>{
            if(res.data){
                this.filterData(res.data, searchKey);
            }
        });

    }


    render() {
        return (
            <div className="container"
            ref={el=>(this.componentRef=el)}
            >
                
                <u><h2 className="h-tag"><i class="fa-solid fa-list"></i> List of Users at the end of the month </h2></u>

                <div class="Search-bar">
                    <form class="Search-form">
                        <input class="Input-data" type="search" placeholder="Search" name='searchQuery' aria-label="Search" onChange={this.handleSearchArea}/>
                    </form>
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Full Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Contact Number</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.admins.map((admins,index) =>(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{admins.name}</td>
                                <td>{admins.email}</td>
                                <td>{admins.address}</td>
                                <td>{admins.phoneNumber}</td>
                               
                            </tr>
                        ))}
                    </tbody> 
                </table>

                <a className='btn btn-warning' href={"/view"}>
                <i class="fa-solid fa-caret-left"></i>&nbsp; Back
                </a>
                

                <div className='text-right mb-3'>
                        <ReactToPrint
                            trigger={()=>{
                            return <button className="btn btn-success" ><i class="fa-solid fa-file-pdf"></i>&nbsp; Print Report </button>
                            }}
                            content={()=>this.componentRef}
                            documentTitle = 'User Details Report'
                            pageStyle= "print"
                        />
                    </div>
 
            </div>
        );
    }
}
