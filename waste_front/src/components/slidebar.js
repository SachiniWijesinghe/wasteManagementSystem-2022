import React from "react"

function Slidebar(){
    return( 
      <div className="sidebar">
      
        <div className="wrapper">
        <input type="checkbox" id="btn" hidden/>
        <label for="btn" className="menu-btn">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </label>
        <nav id="sidebar">
          <div className="title">Side Menu</div>
          <ul className="list-items">
            <li><a href="/register"><i className="fa-solid fa-message-lines"></i>Reqest from</a></li>

            <li><a href="/category"><i className="fas fa-sliders-h"></i> category</a></li>
            <li><a href="/subcategory"><i className="fas fa-address-book"></i>sub category</a></li>
          
        
           
          </ul>
        </nav>
        </div>
        </div>
    )
}
export default Slidebar;