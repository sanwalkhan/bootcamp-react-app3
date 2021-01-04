import React from "react";

function Dinner(props) {
    return(
        <div>
            <h1>Today We are Serving {props.dishName} </h1>
            <h1> and we serve {props.sweetDish} .</h1>
        </div>
    )
}

export default Dinner;