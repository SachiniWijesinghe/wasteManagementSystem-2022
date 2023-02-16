import React from "react";

function TopNav() {


    return(
        <div class="top_nav">
                <div class="container">
                    <ul class="list-inline info">
                        <li><a href="#"><i class="fa-solid fa-square-phone"></i> (+94) 11 4508900</a></li>
                        <li><a href="#"><i class="fa-solid fa-envelope"></i>SEJ006@gmail.com</a></li>
                        <li><a href="#"><i class="fa-solid fa-calendar-days"></i> Mon - Sat 9:00 - 18:30</a></li>
                    </ul>
                    <ul class="list-inline social_icon">
                        <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>  
                    </ul>			
                </div>
            </div>
    )
}

export default TopNav;