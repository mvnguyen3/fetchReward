import React from "react";
import {AjaxRequest} from "../Components/AjaxRequest.js";
import {SimpleCalculation} from "../Components/SimpleCalculation.js";
import {FetchBasic} from "../Components/FetchBasic.js";
export class App extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
   

    
    render(){       
        return(            
            <div> 
                {/* <SimpleCalculation/> */}
                {/* <AjaxRequest/> */}
                <FetchBasic/>
            </div>     
        );
    }
}