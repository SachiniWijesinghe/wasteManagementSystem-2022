
import './App.css';

import AddContactus from './components/AddContactus';
import Home from './components/Home';
//import Header from './components/Header';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Routes, Router, Route, Outlet, Link } from "react-router-dom";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import ViewallContactus from './components/ViewallContactus';
import AddShoroomitem from './components/AddShowroomitem';
import ViewShowroom from './components/ViewShowroom';
import ShowroomAdmin from './components/ShowroomAdmin';
import ContactDelete from './components/ContactDelete';
import UpdateShowroom from './components/UpdateShowroom';
//chathi
import CollectItem from './components/collectItem';
import ViewAllCollect from './components/viewAllCollect';
import ViewAllRequest from './components/viewAllRequest'





function App() {

        

    return (

      

//----------------------search eke---------------
    
=======
import Slidebar from './components/slidebar';
import Header from './components/header';
import Footer from './components/footer';
import Requestform  from'./components/requestform'
import Category from './components/categoryin';
import SubCategory from './components/subcategoryin';
import Adminhome from "./components/AdminHome";
import AddUser from './components/userdetails/AddUser';
import AddAdmin from './components/admindetails/AddAdmin';
import EditAdmin from './components/admindetails/EditAdmin';
import UserProfile from './components/userdetails/UserProfile';
import FooterBottom from "./components/FooterBottom";
import Header from "./components/Header";
import Report from "./components/admindetails/Report";
import ViewAdmin from "./components/admindetails/ViewAdmin";
import Search from "./components/Search";
import EditUser from './components/userdetails/EditUser';
import Login from './components/userdetails/Login';
import TopNav from "./components/TopNav";
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';

function App() {
    return ( 
       
    <div className = "App" >  
   <Router>
< TopNav/>
< Header/>
<Header/>
     <Slidebar/>
    
      <Routes>
         <Route path='/register' element={<Requestform />} />
         <Route path='/category' element={<Category />} />
         <Route path='/subcategory' element={<SubCategory />} />
         <Route path="/" element={<Adminhome />} />
         <Route path="/addUser" element={<AddUser />} />
         <Route path="/login" element={<Login />} />
         <Route path="/addAdmin" element={<AddAdmin />} />
         <Route path="/report" element={<Report />} />
         <Route path="/profile/:id" element={<UserProfile />} />
         <Route path="/updateUser/:id" element={<EditUser />} />
         <Route path="/view" element={<ViewAdmin />} />
         <Route path="/updateAdmin/:id" element={<EditAdmin />} />
          
      </Routes>
      < FooterBottom/>
      <Footer/>
             
    </Router>
        </div >

       
    <BrowserRouter>

        <Header/>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />             
          <Route path="/add" element={<AddContactus/>} />
          <Route path="/view" element={<ViewallContactus/>} />
          <Route path="/addshow" element={<AddShoroomitem/>} />
          <Route path="/showuser" element={<ViewShowroom/>} />
          <Route path="/showadmin" element={<ShowroomAdmin/>} />
          
          <Route path="/delete/:id" element={<ContactDelete/>} />
          
          <Route path="/updateshow/:id" element={<UpdateShowroom/>} />


          <Route path="/addcollectitem" element={<CollectItem/>} />
        <Route path="/viewcollectitem" element={<ViewAllCollect/>} />
        <Route path="/req" element={<ViewAllRequest/>} />


          
          
        </Routes>
    </BrowserRouter>
    
    );

}

export default App;
