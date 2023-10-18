import React, { useState } from "react";
import Buttons from "./Buttons";
import LoadData from "./LoadData";


const App = () => {

    const [categories, setCategories] = useState("All");

   

    return (
        <div class="main">
            <h1>Our Menu</h1>

            <Buttons setCat={setCategories} />

            <LoadData cat={categories} />
        </div>

    )
}

export default App;
