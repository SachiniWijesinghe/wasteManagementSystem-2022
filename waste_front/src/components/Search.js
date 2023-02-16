import React from "react";

function Search() {


    return(
        <div class="Search-bar">
            <form class="Search-form">
              <input class="Input-data" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn-Search" type="submit"><a class="link-search" href="#">Search</a></button>
            </form>
        </div>
    )

}

export default Search;