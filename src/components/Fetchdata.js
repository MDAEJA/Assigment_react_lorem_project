import React from "react";
import '../components/fetchdataStyle.css'

function Fetchdata(props){
    return(
        <>
        <div className="para-div">
           

            <p>{props.contain}</p>

            
        </div>
        </>
    )
}
export default Fetchdata;