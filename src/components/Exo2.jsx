import { useState } from "react";
import "./exo.css";

function Exo2() {
    //const [choice, setIsChoice] = useState(null);
    const [className, setClassName] = useState(null);

    // function qui change choice a yes ou no
    // une condition qui change

    function handleClick(value) {
        // console.log("coucou");
        //console.log("value", value);
        if (value === "Y") {
            setClassName("highlight-green");
        }

        if (value === "N") {
            setClassName("highlight-red");
        }
    }

    return (
        <div id="app">
            <h1 className={`${className}`}>CSS is great!</h1>
            <menu>
                <li>
                    <button onClick={() => handleClick("Y")}>Yes</button>
                </li>
                <li>
                    <button onClick={() => handleClick("N")}>No</button>
                </li>
            </menu>
        </div>
    );
}

export default Exo2;
