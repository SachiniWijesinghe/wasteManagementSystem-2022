import axios from 'axios';
import React, { Component } from 'react';

class ViewAdmin extends Component {

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
            if(res.data != null){
                this.setState({admins:res.data});

        
            }

        });
    }


    onDelete = (id) =>{

        axios.delete(`http://localhost:9090/admin/delete/${id}`).then((res) =>{
            alert("Delete Successfully");
            this.retrieveAdmins();
        });
    }


    filterData(admins, searchKey){
        const result = admins.filter((admins) =>
       admins.name.toLowerCase().includes(searchKey) ||
       admins.email.toLowerCase().includes(searchKey) 
       
        )

        this.setState({admins:result})
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:9090/admin").then(res =>{
            if(res.data){
                this.filterData(res.data, searchKey);
            }
        });

    }


    render() {
        return (
            <div className="container">
                <div className="hero">
                    <nav className="prmenu">
                        <ul>
                            <li><a href="/material-home"><i class="fa-solid fa-house"></i> Home</a></li>                    
                            <li><a href="/report"><i class="fa-solid fa-circle-plus"></i> Report</a></li>
                            <li><a href="/view"><i class="fa-solid fa-list"></i> List of Users</a></li>
                        </ul>
                    </nav>       
                </div>
                <u><h2 className="h-tag"><i class="fa-solid fa-list"></i> List of users</h2></u>

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
                        {this.state.admins.map((admin,index) =>(
                            <tr key={index}>
                                <th scope='row'>{index+1}</th>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.address}</td>
                                <td>{admin.phoneNumber}</td>
                               
                                <td>
                                    <a className='btn btn-warning' href={`/updateAdmin/${admin._id}`}>
                                        <i className='fas fa-edit'></i>&nbsp; Edit
                                    </a>
                                    &nbsp;
                                    <a className='btn btn-danger' href="#" onClick={() =>this.onDelete(admin._id)}>
                                        <i className='far fa-trash-alt'></i>&nbsp; Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
 
            </div>
        );
    }
}

export default ViewAdmin;
