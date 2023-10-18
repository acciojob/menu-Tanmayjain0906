import React from "react";


const Buttons = ({setCat}) => {


    return (
        <div class="buttons">
            <button onClick={() => setCat("All")}>All</button>
            <button onClick={() => setCat("breakfast")}>Breakfast</button>
            <button onClick={() => setCat("lunch")}>Lunch</button>
            <button onClick={() => setCat("shakes")}>Shakes</button>
        </div>
    )
}

export default Buttons;