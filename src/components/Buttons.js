import React from "react";


const Buttons = ({setCat}) => {


    return (
        <div class="buttons">
            <button onClick={() => setCat("All")} id="main">All</button>
            <button onClick={() => setCat("breakfast")} id="filter-btn-1">Breakfast</button>
            <button onClick={() => setCat("lunch")} id="filter-btn-2">Lunch</button>
            <button onClick={() => setCat("shakes")} id="filter-btn-3">Shakes</button>
        </div>
    )
}

export default Buttons;